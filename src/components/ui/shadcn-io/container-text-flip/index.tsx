'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
  suffix?: string;
}

export function ContainerTextFlip({
  words = ['better', 'modern', 'beautiful', 'awesome'],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
  suffix,
}: ContainerTextFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, animationDuration / 2);
    }, interval);
    return () => clearInterval(intervalId);
  }, [words, interval, animationDuration]);

  const currentWord = words[currentWordIndex];
  const letters = currentWord.split('');

  return (
    <span
      className={cn(
        'relative inline-flex items-baseline justify-center rounded-lg px-4 pt-2 pb-3 font-bold',
        '[background:linear-gradient(to_bottom,hsl(var(--brand-4)),hsl(var(--brand-3)))]',
        'shadow-[inset_0_-1px_1px_0_rgba(0,0,0,0.2),0_0_8px_0_rgba(0,0,0,0.1)]',
        'dark:[background:linear-gradient(to_bottom,hsl(var(--brand-6)),hsl(var(--brand-5)))]',
        'dark:shadow-[inset_0_-1px_1px_0_rgba(255,255,255,0.1),0_0_8px_0_rgba(0,0,0,0.3)]',
        className
      )}
    >
      <span className={cn('inline-flex gap-2 text-foreground', textClassName)}>
        <span className="inline-flex">
          {letters.map((letter, index) => (
            <motion.span
              key={`${currentWordIndex}-${index}`}
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                duration: animationDuration / 1000,
                delay: index * 0.02,
                ease: 'easeOut',
              }}
              className="inline-block"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </span>
        {suffix && <span className="inline-block">{suffix}</span>}
      </span>
    </span>
  );
}
