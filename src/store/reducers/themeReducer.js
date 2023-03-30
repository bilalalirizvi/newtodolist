import { Color, light, dark } from "../../constants/theme";
import { SWITCH_THEME } from "../actions/theme";

const initialState = {
  theme: { ...light },
};

const themeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SWITCH_THEME: {
      return {
        ...state,
        theme: payload ? dark : light,
      };
    }
    default:
      return state;
  }
};

export default themeReducer;
