import { useState, useEffect } from 'react';

export function useParallax(factor: number = 0.18) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY * factor);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [factor]);

    return offset;
}
