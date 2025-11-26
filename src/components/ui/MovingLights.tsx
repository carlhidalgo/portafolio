import { useEffect, useRef } from 'react';

export function MovingLights() {
    const lightRef1 = useRef<HTMLDivElement | null>(null);
    const lightRef2 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            if (lightRef1.current) {
                lightRef1.current.style.left = `${x * 100}%`;
                lightRef1.current.style.top = `${y * 100}%`;
            }

            if (lightRef2.current) {
                lightRef2.current.style.left = `${(1 - x) * 100}%`;
                lightRef2.current.style.top = `${(1 - y) * 100}%`;
            }
        };

        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <>
            <div ref={lightRef1} className="fixed w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none z-10 transition-all duration-300" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} />
            <div ref={lightRef2} className="fixed w-80 h-80 bg-pink-400/10 rounded-full blur-3xl pointer-events-none z-10 transition-all duration-300" style={{ left: '60%', top: '60%', transform: 'translate(-50%,-50%)' }} />
        </>
    );
}
