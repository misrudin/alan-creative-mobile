const initialValue = {
  newNews: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const newsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_NEW_NEWS_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_NEW_NEWS_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_NEW_NEWS_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        newNews: action.payload.data,
      };
    default:
      return state;
  }
};

export default newsReducer;
