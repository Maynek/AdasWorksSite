//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
const BASE_INDEX_SITE_PATH:string  = '/[novelId]/';
const BASE_EPISODE_SITE_PATH:string  = '/[novelId]/[episodeId]';
const BASE_NOTE_SITE_PATH:string  = '/[novelId]/note/[noteId]';


let dataUrl: string = 'https://adasworks.pages.dev/';
if (process.env.NODE_ENV === 'development') {
  dataUrl = '/contents/';
}
const BASE_INDEX_DATA_PATH: string   = dataUrl + '[novelId]/out/site/index.json';
const BASE_EPISODE_DATA_PATH: string = dataUrl + '[novelId]/out/site/[episodeId].json';
const BASE_NOTE_DATA_PATH: string    = dataUrl + '[novelId]/out/site/note/[noteId].json';

export const getIndexSitePath = (
  novelId:string,
) => {
  return BASE_INDEX_SITE_PATH.replace('[novelId]', novelId);
};

export const getEpisodeSitePath = (
  novelId:string,
  episodeId:string
) => {
  return BASE_EPISODE_SITE_PATH.replace('[novelId]', novelId).replace('[episodeId]', episodeId);
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

export const getEpisodeDataPath = (
  novelId:string,
  episodeId:string
) => {
  return BASE_EPISODE_DATA_PATH.replace('[novelId]', novelId).replace('[episodeId]', episodeId);
};

export const getNoteDataPath = (
  novelId:string,
  noteId:string
) => {
  return BASE_NOTE_DATA_PATH.replace('[novelId]', novelId).replace('[noteId]', noteId);
};