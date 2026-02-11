import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('portfolio-theme');
        if (saved) return saved;
    }
    return 'dark';
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: getInitialTheme(),
    },
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark';
            localStorage.setItem('portfolio-theme', state.mode);
        },
        setTheme: (state, action) => {
            state.mode = action.payload;
            localStorage.setItem('portfolio-theme', state.mode);
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
