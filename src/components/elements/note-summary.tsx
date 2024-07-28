//--------------------------------
// © Ada Maynek 2024
//--------------------------------
'use client'
import useSWR from 'swr';
import parse from 'html-react-parser';
import { getNoteDataPath } from '@/lib/util'
import Loading from '@/components/elements/loading'
import LoadError from '@/components/elements/load-error'

const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

export default function NotesvelSummary({
  novelId,
  noteId,
} : {
  novelId: string
  noteId: string
}) {
  const shouldFetch = novelId && noteId;
  const path = getNoteDataPath(novelId, noteId);
  const {data, error, isLoading} = useSWR(shouldFetch ? path : null, fetcher);

  if (isLoading) {
    return ( <Loading /> );
  } else if (!data) {
    return ( <LoadError /> );
  } else {
    return (
      <div className="flex flex-col h-full">
        <div className="text-center mb-6">
          <h1 className="font-bold sm:text-2xl ">{data.title}</h1>
        </div>
        <div className="flex-1">
          {parse(data.body)}
        </div>
      </div>
    );
  }
} 