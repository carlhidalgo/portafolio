import { useEffect } from 'react';

export function useTheme() {
    useEffect(() => {
        const root = window.document.documentElement;
        const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const applyTheme = () => {
            if (darkQuery.matches) {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }
        };

        applyTheme();
        darkQuery.addEventListener('change', applyTheme);
        return () => darkQuery.removeEventListener('change', applyTheme);
    }, []);
}
