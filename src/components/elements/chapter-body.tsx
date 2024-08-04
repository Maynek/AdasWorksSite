//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import useSWR from 'swr';
import parse, {DOMNode, domToReact} from 'html-react-parser';
import { getIndexSitePath, getChapterSitePath, getChapterDataPath } from '@/lib/util'
import Loading from '@/components/elements/loading'
import LoadError from '@/components/elements/load-error'
import NotesvelPagination from '@/components/elements/chapter-pagination'

export default function ChapterBody({
  novelId,
  chapterId,
  onClickNote
} : {
  novelId: string
  chapterId: string
  onClickNote?:(noteId:string) => void
}) {

  const clickNote = ({noteId}:{noteId:string}) => {
    if (onClickNote) onClickNote(noteId);
  }

  const replace = (node:DOMNode) =>{
    
    if (node && node.type === 'tag') {
      if (node.name === 'nv-note') {
        const noteId = node.attribs.id;
        const children = node.children as DOMNode[];
        return (
          <span
            className={`
              text-sky-600 no-underline
              hover:text-red-600 hover:underline hover:cursor-help
            `}
            onClick={() => clickNote({noteId})}
          >
            {domToReact(children)}
          </span>
        );
      }
    }
  }

  const shouldFetch = novelId && chapterId;
  const path = getChapterDataPath(novelId, chapterId);
  const {data, error, isLoading} = useSWR(shouldFetch ? path : null);

  if (isLoading) {
    return ( <Loading /> );
  } else if (!data) {
    return ( <LoadError /> );
  } else {
    const indexPath = getIndexSitePath(novelId);
    const prevPath = data.prevId ? getChapterSitePath(novelId, data.prevId) : null;
    const nextPath = data.nextId ? getChapterSitePath(novelId, data.nextId) : null;

    return (
      <div className="flex flex-col h-full">
        <div className="my-6">
          <NotesvelPagination indexPath={indexPath} prevPath={prevPath} nextPath={nextPath} />
        </div>
        <div className="text-center mb-6">
          <h1 className="font-bold sm:text-2xl ">{data.title}</h1>
        </div>
        <div className="flex-1 leading-loose">
          {parse(data.body, {replace})}
        </div>
        <div className="my-6">
          <NotesvelPagination indexPath={indexPath} prevPath={prevPath} nextPath={nextPath} />
        </div>
      </div>
    );
  }
} 