import {
  GET_CITIES,
  SET_MODAL,
  SET_UNITS,
  DELETE_CITY,
  SET_EDIT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
        modal: false,
      };
    case SET_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case SET_UNITS:
      return {
        ...state,
        units: action.payload,
      };
    case DELETE_CITY:
      return {
        ...state,
        cities: action.payload,
      };
    case SET_EDIT:
      return {
        ...state,
        edit: action.payload,
      };
    default:
      return state;
  }
};
