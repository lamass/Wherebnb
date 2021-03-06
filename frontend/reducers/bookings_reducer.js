import { RECEIVE_SINGLE_BOOKING } from '../actions/booking_actions';


const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SINGLE_BOOKING:
      newState = action.booking;
      return newState;
    default:
      return state;
  }
};


export default BookingsReducer;
