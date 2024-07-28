//--------------------------------
// © Ada Maynek 2024
//--------------------------------
const BASE_INDEX_SITE_PATH:string  = '/[novelId]/';
const BASE_CHAPTER_SITE_PATH:string  = '/[novelId]/chapter/[chapterId]';
const BASE_NOTE_SITE_PATH:string  = '/[novelId]/note/[noteId]';


let dataUrl: string = 'https://adasworks.pages.dev/';
if (process.env.NODE_ENV === 'development') {
  dataUrl = '/testdata/';
}
const BASE_INDEX_DATA_PATH: string   = dataUrl + '[novelId]/out/site/chapters/_index.json';
const BASE_CHAPTER_DATA_PATH: string = dataUrl + '[novelId]/out/site/chapters/[chapterId].json';
const BASE_NOTE_DATA_PATH: string    = dataUrl + '[novelId]/out/site/notes/[noteId].json';

export const getIndexSitePath = (
  novelId:string,
) => {
  return BASE_INDEX_SITE_PATH.replace('[novelId]', novelId);
};

export const getChapterSitePath = (
  novelId:string,
  chapterId:string
) => {
  return BASE_CHAPTER_SITE_PATH.replace('[novelId]', novelId).replace('[chapterId]', chapterId);
};

export const getNoteSitePath = (
    novelId:string,
    noteId:string
  ) => {
    return BASE_NOTE_SITE_PATH.replace('[novelId]', novelId).replace('[noteId]', noteId);
  };

export const getIndexDataPath = (
  novelId:string
) => {
  return BASE_INDEX_DATA_PATH.replace('[novelId]', novelId);
};

export const getChapterDataPath = (
  novelId:string,
  chapterId:string
) => {
  return BASE_CHAPTER_DATA_PATH.replace('[novelId]', novelId).replace('[chapterId]', chapterId);
};

export const getNoteDataPath = (
  novelId:string,
  noteId:string
) => {
  return BASE_NOTE_DATA_PATH.replace('[novelId]', novelId).replace('[noteId]', noteId);
};