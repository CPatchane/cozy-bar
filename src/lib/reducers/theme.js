export const SET_THEME = 'SET_THEME'

// action creator
export const setTheme = theme => ({
  type: SET_THEME,
  theme
})

export const reducer = (state = 'default', action) => {
  if (action.type === SET_THEME) {
    return action.theme
  } else {
    return state
  }
}

// selector
export const getTheme = state => state
