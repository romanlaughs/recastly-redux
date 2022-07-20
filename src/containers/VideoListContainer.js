import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = (state) => ({ videos: state.videos });

var mapDispatchToProps = (dispatch) => {
  return {
    handleVideoSearch: () => dispatch({ type: 'CHANGE_VIDEO_LIST' })
  };
};

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default VideoListContainer;
