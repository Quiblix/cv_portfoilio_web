'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Zap } from 'lucide-react';

interface Target {
  id: number;
  tool: string;
  x: number;
  y: number;
  isHit: boolean;
  isCorrect: boolean;
  spawnAt: number;
}

interface ShooterGameProps {
  tools: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
}

type DifficultyConfig = {
  spawnInterval: number;
  maxTargets: number;
  gameDuration: number;
  initialLifeMs: number;
  lifeDecayPerSecond: number;
};

const DIFFICULTY_CONFIGS: Record<string, DifficultyConfig> = {
  easy: {
    spawnInterval: 800,
    maxTargets: 3,
    gameDuration: 45,
    initialLifeMs: 3000,
    lifeDecayPerSecond: 50,
  },
  medium: {
    spawnInterval: 500,
    maxTargets: 5,
    gameDuration: 30,
    initialLifeMs: 2000,
    lifeDecayPerSecond: 75,
  },
  hard: {
    spawnInterval: 300,
    maxTargets: 8,
    gameDuration: 20,
    initialLifeMs: 1500,
    lifeDecayPerSecond: 100,
  },
};

export const ShooterGame = ({ tools, difficulty = 'medium' }: ShooterGameProps) => {
  const config = DIFFICULTY_CONFIGS[difficulty];
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [targets, setTargets] = useState<Target[]>([]);
  const [gameTime, setGameTime] = useState(config.gameDuration);
  const [gameStarted, setGameStarted] = useState(false);
  const gameRef = useRef<HTMLDivElement>(null);
  const targetIdRef = useRef(0);

  const startGame = () => {
    setGameStarted(true);
    setGameActive(true);
    setScore(0);
    setErrors(0);
    setGameTime(config.gameDuration);
    setTargets([]);
    targetIdRef.current = 0;
  };

// Liste de faux langages
const FAKE_TOOLS = [
  'Python', 'Java', 'Go', 'Rust', 'Ruby', 'PHP', 'Swift', 'Kotlin',
  'Scala', 'Haskell', 'Clojure', 'Elixir', 'Dart', 'Groovy',
  'Coffeescript', 'VB.NET', 'Delphi', 'Objective-C', 'Perl', 'Lua',
];

  const endGame = () => {
    setGameActive(false);
    setTargets([]);
  };

  // Spawn new targets
  useEffect(() => {
    if (!gameActive) return;

    const spawnInterval = setInterval(() => {
      if (targets.length < 5) {
        const isCorrect = Math.random() > 0.3; // 70% correct, 30% incorrect
        let randomTool: string;
        
        if (isCorrect) {
          randomTool = tools[Math.floor(Math.random() * tools.length)];
        } else {
          randomTool = FAKE_TOOLS[Math.floor(Math.random() * FAKE_TOOLS.length)];
        }

        const newTarget: Target = {
          id: targetIdRef.current++,
          tool: randomTool,
          x: Math.random() * (gameRef.current?.offsetWidth ? gameRef.current.offsetWidth - 80 : 300),
          y: Math.random() * 200 + 40,
          isHit: false,
          isCorrect,
          spawnAt: Date.now(),
        };
        setTargets((prev) => [...prev, newTarget]);
      }
    }, 500);

    return () => clearInterval(spawnInterval);
  }, [gameActive, targets.length, tools]);

  // Game timer
  useEffect(() => {
    if (!gameActive) return;

    const timer = setInterval(() => {
      setGameTime((prev) => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameActive]);

  // Auto-remove old targets: starts at 2 seconds, then disappears faster over time,
  // and remove clicked targets shortly after they are hit.
  useEffect(() => {
    if (!gameActive) return;

    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setTargets((prev) => prev.filter((target) => {
        if (target.isHit) {
          return now - target.spawnAt < 400;
        }

        const elapsedGameSeconds = 30 - gameTime;
        const maxLife = Math.max(500, 2000 - elapsedGameSeconds * 75);
        return now - target.spawnAt < maxLife;
      }));
    }, 100);

    return () => clearInterval(cleanupInterval);
  }, [gameActive, gameTime]);

  const handleTargetClick = (id: number, isCorrect: boolean) => {
    setTargets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isHit: true } : t))
    );
    
    if (isCorrect) {
      setScore((prev) => prev + 10);
    } else {
      setErrors((prev) => prev + 1);
      setScore((prev) => Math.max(0, prev - 5)); // -5 points, minimum 0
    }
  };

  return (
    <div className="w-full">
      {/* Game Title */}
      <div className="flex items-center gap-3 mb-6">
        <Zap size={24} className="text-valorant-red" />
        <h3 className="text-xl font-black uppercase tracking-wider">Shooter - Détruisez les langages</h3>
      </div>

      {/* Game Container */}
      <div className="border border-valorant-red/40 rounded-lg bg-valorant-slate/30 overflow-hidden">
        {!gameStarted ? (
          <div className="p-12 text-center">
            <p className="text-valorant-gray mb-4">Cliquez sur les langages du projet et évitez les leurres.</p>
            <p className="text-sm text-valorant-gray mb-2">✓ Correct = +10 points</p>
            <p className="text-sm text-valorant-gray mb-6">✕ Incorrect = -5 points</p>
            <p className="text-sm text-valorant-gray mb-6">Vous avez 30 secondes...</p>
            <button
              onClick={startGame}
              className="px-6 py-3 bg-valorant-red text-white font-black uppercase tracking-wider hover:bg-valorant-red/80 transition rounded"
            >
              Démarrer le jeu
            </button>
          </div>
        ) : (
          <div ref={gameRef} className="relative h-80 bg-black/50 overflow-hidden cursor-crosshair">
            {/* Crosshair cursor overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <svg
                viewBox="0 0 100 100"
                className="w-8 h-8 text-valorant-red/30 pointer-events-none"
                style={{
                  position: 'fixed',
                  pointerEvents: 'none',
                  zIndex: 1000,
                }}
              >
                <circle cx="50" cy="50" r="3" fill="currentColor" />
                <line x1="50" y1="20" x2="50" y2="35" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="65" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
                <line x1="20" y1="50" x2="35" y2="50" stroke="currentColor" strokeWidth="0.5" />
                <line x1="65" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>

            {/* HUD */}
            <div className="absolute top-4 left-4 z-20 text-valorant-red font-mono text-sm">
              <div>SCORE: {score}</div>
              <div>TIME: {gameTime}s</div>
              <div>TARGETS: {targets.length}</div>
              <div className="text-red-500">ERRORS: {errors}</div>
            </div>

            {/* Targets */}
            <AnimatePresence>
              {targets.map((target) => (
                <motion.button
                  key={target.id}
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={
                    target.isHit
                      ? { scale: 1.5, opacity: 0 }
                      : { scale: 1, rotate: 0, opacity: 1 }
                  }
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  style={{
                    position: 'absolute',
                    left: target.x,
                    top: target.y,
                  }}
                  onClick={() => handleTargetClick(target.id, target.isCorrect)}
                  className="w-16 h-16 rounded-lg hover:scale-110 transition-transform border-2 border-valorant-red bg-valorant-red/90 flex items-center justify-center text-white text-xs font-black text-center p-1 cursor-pointer shadow-lg shadow-valorant-red/50"
                >
                  <span className="text-[10px] leading-tight">{target.tool}</span>
                </motion.button>
              ))}
            </AnimatePresence>

            {/* Game Over Message */}
            {gameStarted && gameTime === 0 && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 z-30"
              >
                <h2 className="text-4xl font-black text-valorant-red mb-4">GAME OVER</h2>
                <p className="text-2xl text-white mb-2">Score: {score}</p>
                <p className="text-lg text-red-400 mb-8">Erreurs: {errors}</p>
                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-valorant-red text-white font-black uppercase tracking-wider hover:bg-valorant-red/80 transition rounded"
                >
                  Rejouer
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="mt-4 text-xs space-y-2">
        <div className="text-green-400">
          ✓ À cibler: {tools.join(', ')}
        </div>
        <div className="text-valorant-gray">
          Autres cibles (à éviter) sont tirées aléatoirement d'autres langages
        </div>
      </div>
    </div>
  );
};
