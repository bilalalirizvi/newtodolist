import { light, dark } from "../../constants/theme";
import { THEME_LIGHT, THEME_DARK } from "../actions/theme";

const initialState = {
  mode: "light",
  theme: { ...light },
};

const themeReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case THEME_LIGHT: {
      return {
        ...state,
        mode: "light",
        theme: light,
      };
    }
    case THEME_DARK: {
      return {
        ...state,
        mode: "dark",
        theme: dark,
      };
    }
    default:
      return state;
  }
};

export default themeReducer;
