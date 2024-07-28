//--------------------------------
// © Ada Maynek 2024
//--------------------------------
import Link from 'next/link'
import Common from "@/components/layouts/common"

export default function About() {
  return (
    <Common>
      <h1 className="font-bold text-3xl mb-4">このサイトについて</h1>
      <p>Ada Maynek が作成している Web 小説「 Programmable stars ~ 俺のプログラミングであの子を最強化するまでの物語 ~ 」を公開するためのサイトです。</p>
    </Common>
  );
}
