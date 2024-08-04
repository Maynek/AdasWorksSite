//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import Link from 'next/link'
import useSWR from 'swr';
import { getChapterSitePath, getIndexDataPath } from '@/lib/util'
import Loading from '@/components/elements/loading'
import LoadError from '@/components/elements/load-error'

export default function ChapterIndex({
  novelId
} : {
  novelId: string
}) {
  const path = getIndexDataPath(novelId);
  const {data, error, isLoading} = useSWR(path);
  let id:string;

  if (isLoading) {
    return ( <Loading /> );
  } else if (!data) {
    return ( <LoadError /> );
  } else {
    return (
      <>
        <div className="my-4 text-center">
          <h1 className="font-bold mb-1 sm:text-2xl">{data.maintitle}</h1>
          <h2 className="font-bold sm:text-xl">{data.subtitle}</h2>
        </div>
        <ul >
          {data.chapters.map(({id, title}:{id:string, title:string}) => (
            <li key={id} className="my-2 text-sky-600 no-underline hover:text-red-600 hover:underline">
              <Link href={getChapterSitePath(novelId, id)}>{title}</Link>
            </li>
          ))}
          <li className="my-2 text-sky-600 no-underline hover:text-red-600 hover:underline">
            <Link href={"/" + novelId + "/note/_GLOSSARY"}>用語集</Link>
          </li>
        </ul>

      </>
    );
  }
} 