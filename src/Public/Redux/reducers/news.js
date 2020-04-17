const initialValue = {
  newNews: [],
  allNews: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  detailNews: [],
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
    case 'GET_ALL_NEWS_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_ALL_NEWS_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_ALL_NEWS_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        allNews: action.payload.data,
      };
    case 'GET_DETAIL_NEWS_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_DETAIL_NEWS_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_DETAIL_NEWS_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detailNews: action.payload.data,
      };
    default:
      return state;
  }
};

export default newsReducer;
