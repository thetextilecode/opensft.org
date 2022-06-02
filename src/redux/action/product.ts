// import fetch from 'isomorphic-unfetch'
import filterProductList from '../../lib/filterProduct';
import searchItemsByText from '../../lib/searchItemsByText';
import * as Types from '../constants/actionTypes';

// Fetch Product fetchProduct
export const fetchProduct = (searchTerm: any, url: RequestInfo | URL, filters: any) => async dispatch => {
  try {

    const sendRequest = await fetch(url);
    const data = await sendRequest.json();

    // @ts-ignore
    window.products = data;

    const searchedItems = searchItemsByText(searchTerm, data);
    const filteredList = filterProductList(searchedItems, filters);

    dispatch({
      type: Types.FETCHED_PRODUCT,
      payload: { products: filteredList },
    });

  } catch (error) {
    console.log(error);
  }

};


// Fetch More Product 
export const fetchMoreProduct = (url: RequestInfo | URL, total: any) => async dispatch => {
  try {
    const sendRequest = await fetch(url);
    const data = await sendRequest.json();

    // const searchedItems = searchItemsByText(searchTerm,data)
    // const filteredList  = filterProductList(searchedItems,filters)

    dispatch({
      type: Types.FETCHED_MORE_PRODUCT,
      payload: { products: data, total },
    });

  } catch (error) {
    console.log(error);
  }

};


// Fetch Product By Category

export const fetchByCategory = async (url: RequestInfo | URL, filters?: {
  category: any // const filteredList  = filterProductList(searchedItems,filters)
}) => {
  try {
    const sendRequest = await fetch(url);
    const data = await sendRequest.json();
    return filterProductList(data, filters);
  } catch (error) {
    console.log(error);
  }
};
