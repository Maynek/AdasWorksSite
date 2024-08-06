//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import Link from 'next/link'
import useSWR from 'swr';
import { getEpisodeSitePath as getEpisodeSitePath, getIndexDataPath } from '@/lib/util'
import Loading from '@/components/elements/loading'
import LoadError from '@/components/elements/load-error'

type episode = {
  id:string;
  title: string;
}

type chapter = {
  id: string;
  title: string;
  episodes: Array<episode>;
}


export default function EpisodeIndex({
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
        <div className="mt-4 mb-8 text-center">
          <h1 className="font-bold mb-1 sm:text-2xl">{data.maintitle}</h1>
          <h2 className="font-bold sm:text-xl">{data.subtitle}</h2>
        </div>
        <ul>
          {data.chapters.map(({id, title, episodes}:chapter) => (
            <li key={id} className="my-4">
              <span className="font-bold sm:text-lg">{title}</span>
              <ul className="my-2 font-normal">
                {episodes?.map(({id,title}:episode) => (
                  <li key={id} className="text-sky-600 no-underline hover:text-red-600 hover:underline">
                    <Link href={getEpisodeSitePath(novelId, id)}>{title}</Link>
                  </li>
                ))}
              </ul>
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