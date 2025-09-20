import { useEffect, useRef } from 'react';

const CHARACTERS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function getRandomChar() {
  return CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
}

const COLUMN_COUNT = 32;
const ROWS = 24;

const MatrixRain = () => {
  const columns = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animationFrame: number;
    const drops = Array(COLUMN_COUNT).fill(0).map(() => Math.floor(Math.random() * ROWS));

    function draw() {
      columns.current.forEach((col, i) => {
        if (!col) return;
        const chars = col.children;
        for (let j = 0; j < chars.length; j++) {
          const el = chars[j];
          if (!(el instanceof HTMLElement)) continue;
          if (Math.random() > 0.975) {
            el.innerText = getRandomChar();
          }
          if (typeof drops[i] === 'number') {
            el.style.opacity = (j === drops[i] ? '1' : (j < drops[i] ? '0.5' : '0.15'));
          }
        }
        if (typeof drops[i] === 'number') {
          drops[i] = (drops[i] + 1) % ROWS;
        }
      });
      animationFrame = requestAnimationFrame(draw);
    }
    animationFrame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden" style={{mixBlendMode:'lighten'}}>
      <div className="w-full h-full flex flex-row justify-between items-stretch">
        {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={el => columns.current[i] = el}
            className="flex flex-col justify-end h-full"
            style={{ minWidth: '1.5vw', maxWidth: '2vw' }}
          >
            {Array.from({ length: ROWS }).map((_, j) => (
              <span
                key={j}
                className="block text-green-400 font-mono text-xs md:text-sm lg:text-base select-none transition-opacity duration-200"
                style={{ opacity: 0.15, filter: 'blur(0.5px)' }}
              >
                {getRandomChar()}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatrixRain;
