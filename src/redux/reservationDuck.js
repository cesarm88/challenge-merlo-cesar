//CONSTANTS
const initialData = {
  checkin: '',
  checkout: '',
  adults: 1,
  children: 0,
  pets: false,
  userMessage: '',
  checkinToString: null,
  checkoutToString: null,
  status: {
    isLoading: false,
    error: false,
    fetchRef: null,
  },
  results: {
    nights_count: null,
    nights_cost: null,
    discount: null,
    cleaning_fee: null,
    total: null,
  },
};

const HANDLE_CHECKIN = 'HANDLE_CHECKIN';
const HANDLE_CHECKOUT = 'HANDLE_CHECKOUT';
const HANDLE_ADULTS = 'HANDLE_ADULTS';
const HANDLE_CHILDREN = 'HANDLE_CHILDREN';
const HANDLE_PETS = 'HANDLE_PETS';
const REFRESH_COSTS = 'REFRESH_COSTS';
const REFRESH_COSTS_SUCCESS = 'REFRESH_COSTS_SUCCESS';
const REFRESH_COSTS_ERROR = 'REFRESH_COSTS_ERROR';
const HANDLE_SUBMIT = 'HANDLE_SUBMIT';

//REDUCER
export default function reducer(state = initialData, action = {}) {
  switch (action.type) {
    case HANDLE_CHECKIN:
      return { ...state, ...action.payload };
    case HANDLE_CHECKOUT:
      return { ...state, ...action.payload };
    case HANDLE_ADULTS:
      return { ...state, adults: action.payload };
    case HANDLE_CHILDREN:
      return { ...state, children: action.payload };
    case HANDLE_PETS:
      return { ...state, pets: action.payload };
    case REFRESH_COSTS:
      return { ...state, status: { ...state.status, isLoading: true, fetchRef: action.payload } };
    case REFRESH_COSTS_SUCCESS:
      return { ...state, results: { ...action.payload }, status: { ...state.status, isLoading: false, fetchRef: null } };
    case REFRESH_COSTS_ERROR:
      return { ...state, status: { ...state.status, isLoading: false, error: 'fetch error', fetchRef: null } };
    case HANDLE_SUBMIT:
      return { ...state, userMessage: action.payload };
    default:
      return state;
  }
}

//AUX
export const calculateCosts = (dispatch, state) => {
  const { checkin, checkout, adults, children, pets } = state.reservation;
  const { id } = state.listing.data;
  const { fetchRef } = state.reservation.status;
  const url = `https://mc-api-pi.vercel.app/api/listings/${id}/reservation-cost`;

  //current request handler
  if (fetchRef) {
    fetchRef.abort();
  }

  if (checkin && checkout) {
    const controller = new AbortController();
    const { signal } = controller;

    dispatch({
      type: REFRESH_COSTS,
      payload: controller,
    });

    const body = JSON.stringify({ checkin, checkout, adults, children, pets });
    const headers = { 'Content-Type': 'application/json' };

    fetch(url, {
      method: 'POST',
      signal,
      body,
      headers,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return dispatch({
          type: REFRESH_COSTS_SUCCESS,
          payload: res,
        });
      })
      .catch((e) => {
        if (e.name && e.name !== 'AbortError') {
          return dispatch({
            type: REFRESH_COSTS_ERROR,
            payload: e.userMessage,
          });
        }
      });
  }
};

//ACTIONS
export const handleCheckinAction = (checkin) => (dispatch, getState) => {
  const checkinToString = new Date(checkin).toLocaleString('en-US', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'long',
  });

  dispatch({
    type: HANDLE_CHECKIN,
    payload: { checkin, checkinToString },
  });

  calculateCosts(dispatch, getState());
};

export const handleCheckoutAction = (checkout) => (dispatch, getState) => {
  const checkoutToString = new Date(checkout).toLocaleString('en-US', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  dispatch({
    type: HANDLE_CHECKOUT,
    payload: { checkout, checkoutToString },
  });

  calculateCosts(dispatch, getState());
};

export const handleAdultsAction = (n = 0, min = 1, max = 1) => (dispatch, getState) => {
  if (n >= min && n <= max) {
    dispatch({
      type: HANDLE_ADULTS,
      payload: n,
    });

    calculateCosts(dispatch, getState());
  }
};

export const handleChildrenAction = (n = 0, min = 1, max = 1) => (dispatch, getState) => {
  if (n >= min && n <= max) {
    dispatch({
      type: HANDLE_CHILDREN,
      payload: n,
    });
    
    calculateCosts(dispatch, getState());
  }
};

export const handlePetsAction = (pet = false) => (dispatch, getState) => {
  const state = getState();
  const { pets } = state.reservation;
  if (pets !== pet) {
    dispatch({
      type: HANDLE_PETS,
      payload: pet,
    });

    calculateCosts(dispatch, getState());
  }
};

export const handleSubmitAction = (text) => (dispatch) => {
  dispatch({
    type: HANDLE_SUBMIT,
    payload: text,
  });
};
