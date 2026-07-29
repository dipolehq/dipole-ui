import { GradientBars } from '@components/effects/GradientBars';

/**
 * Hero section — fills the viewport below the navbar with the gradient bars
 * backdrop. No foreground content yet.
 */
export function Hero() {
  return (
    <div className="relative w-full h-[calc(100vh-4rem)] bg-[#0b0d0e] overflow-hidden">
      <div className="absolute inset-0">
        <GradientBars
          theme="onDark"
          numBars={7}
          gradientFrom="#ABABAB"
          animationDuration={3}
        />
      </div>
    </div>
  );
}
