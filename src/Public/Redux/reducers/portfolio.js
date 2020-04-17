const initialValue = {
  allPortfolio: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
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
    default:
      return state;
  }
};

export default portfolioReducer;
