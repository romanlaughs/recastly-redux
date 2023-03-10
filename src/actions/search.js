import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return (dispatch) => {
    var videoCB = (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    };

    searchYouTube({ key: YOUTUBE_API_KEY, query: q }, videoCB);
  };
};
export default handleVideoSearch;
