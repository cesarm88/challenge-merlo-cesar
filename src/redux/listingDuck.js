//CONSTANTS
const initialData = {
  status: {
    isLoading: false,
    error: false,
  },
  data: {},
};

const BASE_URL = 'https://mc-api-pi.vercel.app/api/listings/';

const GET_INFO = 'GET_INFO';
const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
const GET_INFO_ERROR = 'GET_INFO_ERROR';

//REDUCER
export default function reducer(state = initialData, action = {}) {
  switch (action.type) {
    case GET_INFO:
      return { ...state, status: { loading: true } };
    case GET_INFO_SUCCESS:
      return { ...state, data: { ...action.payload }, status: { loading: false } };
    case GET_INFO_ERROR:
      return { ...state, status: { error: action.payload, loading: false } };
    default:
      return state;
  }
}

//ACTIONS
export const getInfoAction = (uuid = 'uuid') => (dispatch) => {
  dispatch({ type: GET_INFO });

  const URL = BASE_URL + uuid;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: GET_INFO_SUCCESS, payload: data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_INFO_ERROR, payload: err.message });
    });
};
