import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('portfolio-theme');
        if (saved) return saved;
    }
    return 'light';
};

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(getInitialTheme);

    useEffect(() => {
        localStorage.setItem('portfolio-theme', mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
};
