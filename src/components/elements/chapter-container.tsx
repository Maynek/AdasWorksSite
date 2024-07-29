//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import { useState, useRef }  from "react";
import Link from 'next/link'
import { getNoteSitePath } from '@/lib/util'
import ChapterBody from '@/components/elements/chapter-body'
import NoteSummary from '@/components/elements/note-summary'

export default function ChapterContainer({
  novelId,
  chapterId,
}:{
  novelId: string
  chapterId: string
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const [noteIdState, setNoteIdState] = useState('')

  //モーダルを開く
  const openNote = (noteId:string) => {
    setNoteIdState(noteId);
    dialogRef.current?.showModal();
  };

  //Noteを閉じる
  const closeNote = () => {
    dialogRef.current?.close();
    setNoteIdState('');
  }

  return (
    <>
      <ChapterBody novelId={novelId} chapterId={chapterId} onClickNote={openNote}/>
      <dialog
        ref={dialogRef}
        className={`
          p-2 w-4/5 h-7/8
          backdrop:bg-gray-900 backdrop:bg-opacity-50 backdrop:backdrop-blur
          sm:mx-auto sm:max-w-xl 
        `}
      >
        <button type="button" onClick={closeNote}>閉じる</button>
        <NoteSummary novelId={novelId} noteId={noteIdState} />
        <Link href={getNoteSitePath(novelId, noteIdState)}>詳細を開く</Link>
      </dialog>
    </>
  );
}