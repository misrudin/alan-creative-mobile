const initialValue = {
  newPosts: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  media: [],
  detailPost: [],
  allPost: [],
};

const postsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_NEW_POSTS_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_NEW_POSTS_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_NEW_POSTS_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        newPosts: action.payload.data,
      };
    case 'GET_MEDIA_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_MEDIA_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_MEDIA_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        media: action.payload.data,
      };
    case 'GET_DETAIL_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_DETAIL_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_DETAIL_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detailPost: action.payload.data,
      };

    case 'GET_ALL_POSTS_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_ALL_POSTS_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'GET_ALL_POSTS_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        allPost: action.payload.data,
      };

    default:
      return state;
  }
};

export default postsReducer;
