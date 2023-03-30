export const SWITCH_THEME = "SWITCH_THEME";
export const THEME_DARK = "THEME_DARK";

export const switchTheme = (payload) => {
  return {
    type: SWITCH_THEME,
    payload: payload,
  };
};
