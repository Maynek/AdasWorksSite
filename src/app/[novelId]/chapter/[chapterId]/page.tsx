//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Common from "@/components/layouts/common"
import {SWRProvider} from '@/components/elements/swr-provider'
import ChapterContainer from '@/components/elements/chapter-container'

export default function ChapterPage({
  params,
}: Readonly<{
  params: {
    novelId: string
    chapterId: string  
  }
}>) {
  return (
    <Common>
      <SWRProvider>
        <ChapterContainer
          novelId={params.novelId}
          chapterId={params.chapterId}
        />
      </SWRProvider>
    </Common>
  );
}