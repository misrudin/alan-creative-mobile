const initialValue = {
  mediaCarousel: [],
  allMedia: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  detailMedia: [],
  detailMediaN: [],
  detailMediaP: [],
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
        allMedia: state.allMedia.concat(action.payload.data.link),
      };
    case 'MEDIA_DETAIL_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'MEDIA_DETAIL_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'MEDIA_DETAIL_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detailMedia: action.payload.data,
      };
    case 'N_DETAIL_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'N_DETAIL_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'N_DETAIL_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detailMediaN: state.detailMediaN.concat(action.payload.data.link),
      };
    case 'P_DETAIL_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'P_DETAIL_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'P_DETAIL_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detailMediaP: state.detailMediaN.concat(action.payload.data.link),
      };
    default:
      return state;
  }
};

export default mediaReducer;
