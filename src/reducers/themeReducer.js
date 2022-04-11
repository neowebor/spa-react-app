const CHANGE_THEME = 'CHANGE_THEME';

const initialState = {
    theme: 'light',
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return action.theme === 'light' ?  {theme: 'light'} :  {theme: 'dark'};
        default:
            return state;
    }
}

export const themeActionCreator = (theme) => ({type: CHANGE_THEME, theme});

export default themeReducer;