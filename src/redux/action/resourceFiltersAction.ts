import * as Types from '../constants/actionTypes';

export const updateProductFilters = (productFilters) => (dispatch) => {
  dispatch({
    type: Types.UPDATE_PRODUCT_FILTERS,
    payload: { productFilters },
  });
};

export const updateProductCategory = (category) => (dispatch) => {
  dispatch({
    type: Types.UPDATE_PRODUCT_CATEGORY,
    payload: { category },
  });
};

export const updateProductRating = (rating) => (dispatch) => {
  console.log(rating);
  dispatch({
    type: Types.UPDATE_RATING,
    payload: rating,
  });
};

export const updateResourceFilters = (resourceFilters) => (dispatch) => {
  dispatch({
    type: Types.UPDATE_RESOURCE_FILTERS,
    payload: { resourceFilters },
  });
};

export const updateResourceCategory = (category) => (dispatch) => {
  dispatch({
    type: Types.UPDATE_RESOURCE_CATEGORY,
    payload: { category },
  });
};

export const updateResourceRating = (rating) => (dispatch) => {
  console.log(rating);
  dispatch({
    type: Types.UPDATE_RATING,
    payload: rating,
  });
};
