import { deleteResource, findResourceIndexById } from '../../lib/util';
import * as Types from '../constants/actionTypes';

// {items:[],filteredList:[]}

export default (state = { items: [] }, action) => {
  switch (action.type) {
    case Types.FETCHED_RESOURCE:
      return {
        ...state,
        items: [...action.payload.resources],
      };

    case Types.FETCHED_MORE_RESOURCE:
      const mergeAllResources = [...state.items, ...action.payload.resources];
      // console.log(mergeAllResources);
      const limit =
        action.payload.total && mergeAllResources.length > action.payload.total
          ? mergeAllResources.splice(0, action.payload.total)
          : mergeAllResources;

      return {
        ...state,
        items: [...limit],
      };

    case Types.ADD_RESOURCE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case Types.DELETE_RESOURCE:
      return deleteResource(state, action.payload.id);

    case Types.UPDATE_RESOURCE:
      const index = findResourceIndexById(state, action.payload.resource.id);
      state[index] = action.payload.resource;

      return { ...state };

    default:
      return state;
  }
};
