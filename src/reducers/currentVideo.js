import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    console.log('This is where it goes wrong');

  default:
    return state;
  }
};

export default currentVideoReducer;
