import { useEffect, useState } from 'react';


export default function UseDarkMode() {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        const div = document.querySelector('#root');
        div.classList.add("root");

        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme)
    }, [colorTheme, theme])

    return [colorTheme, setTheme]
};

// const ThemeContext = createContext();

// export default function ThemeContextProvider({ children }) {
//     const [theme, setTheme] = useState(localStorage.getItem("theme") !== 'dark' ? 'light' : 'dark');

//     useEffect(() => {
//         const root = window.document.documentElement;

//         root.classList.add(theme);
//         localStorage.setItem("theme", theme)
//     }, [theme])

//     return (
//         <ThemeContext.Provider value={{ theme, setTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };


// export function UseDarkMode() {
//     return useContext(ThemeContext)
// };


