import Constants  from '../constants/Constants';
import {exampleRequest} from '../requester';

export function exampleSimpleAction() {
  return { type: Constants.EXAMPLE_CONSTANT };
}

export function exampleAsyncAction(url) {
  return dispatch => {
    dispatch({ type: Constants.EXAMPLE_ASYNC_BEGIN});
    exampleRequest(url).then(data => {
      dispatch({ type: Constants.EXAMPLE_ASYNC_SUCCESS, data: data });
    }).catch(e => {
      dispatch({ type: Constants.EXAMPLE_ASYNC_FAILURE, error: e });
    });
  };
}
