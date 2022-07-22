import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO':
    var newVidState = action.video;
    return newVidState;

  default:
    return state;
  }
};

export default currentVideoReducer;




// switch (action.type) {
//   case 'CHANGE_VIDEO':
//     return action.changeVideo;

//   default:
//     return state;
//   }
// };