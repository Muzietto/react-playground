// NB: only webpack understands requires,
// while here we'll be building with naked Babel

// these are all the ACTIONS

let startTimeString = new Date().toString(); // closing in...

// action types
const ActionTypes = {
  INCREASE_TIME: 'INCREASE_TIME',
};

// actually this fun is an ACTION CREATOR
let newTime = timeString => { 
  return {
    type: ActionTypes.INCREASE_TIME,
    newTime: timeString,
  };
};

const ActionCreators = {
  newTime: newTime,
};

// start the clock here (here? someplace else?)
setInterval(function() {
  store.dispatch(ActionCreators.newTime(new Date().toString()));
}, 1000);