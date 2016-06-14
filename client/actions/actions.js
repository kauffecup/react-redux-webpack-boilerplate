import { exampleRequest } from '../requester';

export const EXAMPLE_CONSTANT = 'EXAMPLE_CONSTANT';
export const EXAMPLE_ASYNC_BEGIN = 'EXAMPLE_ASYNC_BEGIN';
export const EXAMPLE_ASYNC_SUCCESS = 'EXAMPLE_ASYNC_SUCCESS';
export const EXAMPLE_ASYNC_FAILURE = 'EXAMPLE_ASYNC_FAILURE';

export function exampleSimpleAction() {
  return { type: EXAMPLE_CONSTANT };
}

export function exampleAsyncAction(url) {
  return dispatch => {
    dispatch({ type: EXAMPLE_ASYNC_BEGIN });
    exampleRequest(url).then(data => {
      dispatch({ type: EXAMPLE_ASYNC_SUCCESS, data });
    }).catch(e => {
      dispatch({ type: EXAMPLE_ASYNC_FAILURE, error: e });
    });
  };
}
