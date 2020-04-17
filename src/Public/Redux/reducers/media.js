const initialValue = {
  mediaCarousel: [],
  allMedia: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const mediaReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'MEDIA_CAROUSEL_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'MEDIA_CAROUSEL_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'MEDIA_CAROUSEL_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        mediaCarousel: action.payload.data,
      };
    case 'MEDIA_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'MEDIA_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'MEDIA_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        allMedia: action.payload.data,
      };
    default:
      return state;
  }
};

export default mediaReducer;
