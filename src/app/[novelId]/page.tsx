//--------------------------------
// © Ada Maynek 2024
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