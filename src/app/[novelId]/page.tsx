//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Common from "@/components/layouts/common"
import ChapterIndex from '@/components/elements/chapter-index'
import {SWRProvider} from '@/components/elements/swr-provider'

export default function IndexPage({
  params,
}: Readonly<{
  params: {
    novelId: string
  }
}>) {
  return (
    <Common>
      <SWRProvider>
        <ChapterIndex novelId={params.novelId}/>
      </SWRProvider>
    </Common>
  );
}