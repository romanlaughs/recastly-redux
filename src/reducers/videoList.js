import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    var newState = action.videos;
    return newState;


  default:
    return state;
  }
};

export default videoListReducer;
