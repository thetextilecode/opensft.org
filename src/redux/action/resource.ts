// import fetch from 'isomorphic-unfetch'
import filterResourceList from '../../lib/filterResource';
import searchItemsByText from '../../lib/searchItemsByText';
import * as Types from '../constants/actionTypes';

// Fetch Resource fetchResource
export const fetchResource =
  (searchTerm: any, url: RequestInfo | URL, filters: any) => async (dispatch) => {
    try {
      const sendRequest = await fetch(url);
      const data = await sendRequest.json();

      // @ts-ignore
      window.resources = data;

      const searchedItems = searchItemsByText(searchTerm, data);
      const filteredList = filterResourceList(searchedItems, filters);

      dispatch({
        type: Types.FETCHED_RESOURCE,
        payload: { resources: filteredList },
      });
    } catch (error) {
      console.log(error);
    }
  };

// Fetch More Resource
export const fetchMoreResource = (url: RequestInfo | URL, total: any) => async (dispatch) => {
  try {
    const sendRequest = await fetch(url);
    const data = await sendRequest.json();

    // const searchedItems = searchItemsByText(searchTerm,data)
    // const filteredList  = filterResourceList(searchedItems,filters)

    dispatch({
      type: Types.FETCHED_MORE_RESOURCE,
      payload: { resources: data, total },
    });
  } catch (error) {
    console.log(error);
  }
};

// Fetch Resource By Category

export const fetchByCategory = async (
  url: RequestInfo | URL,
  filters?: {
    category: any; // const filteredList  = filterResourceList(searchedItems,filters)
  }
) => {
  try {
    const sendRequest = await fetch(url);
    const data = await sendRequest.json();
    return filterResourceList(data, filters);
  } catch (error) {
    console.log(error);
  }
};
