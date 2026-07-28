import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--color-accent)] text-white',
  secondary: 'bg-gray-100 text-[#0b0d0e] border border-gray-200',
  ghost: 'bg-transparent text-inherit',
};

export function Button({ variant = 'primary', className, type = 'button', ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md font-semibold cursor-pointer transition-opacity duration-150 disabled:opacity-60 disabled:cursor-not-allowed ${variantClasses[variant]} ${className ?? ''}`}
      {...rest}
    />
  );
}
