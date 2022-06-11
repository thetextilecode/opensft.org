import * as Types from '../constants/actionTypes';

export default (state = { category: '' }, action) => {
  switch (action.type) {
    case Types.UPDATE_RESOURCE_FILTERS:
      return {
        ...state,
        ...action.payload.resourceFilters,
      };

    case Types.UPDATE_RESOURCE_CATEGORY:
      const { category } = action.payload;
      return {
        ...state,
        category,
      };
    case Types.UPDATE_RATING:
      const { rating } = action.payload;
      return {
        ...state,
        rating,
      };

    default:
      return state;
  }
};
