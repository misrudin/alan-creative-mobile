const initialValue = {
  allPortfolio: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  detailPort: [],
};

const portfolioReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'PORTFOLIO_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'PORTFOLIO_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'PORTFOLIO_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        allPortfolio: action.payload.data,
      };
    case 'PORT_DETAIL_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'PORT_DETAIL_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.message,
      };
    case 'PORT_DETAIL_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detailPort: action.payload.data,
      };
    default:
      return state;
  }
};

export default portfolioReducer;
