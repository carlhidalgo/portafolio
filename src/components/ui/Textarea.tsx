import { ReactNode } from 'react';
import { clsx } from 'clsx';
import type { BaseComponentProps } from '@/types';

interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'outlined';
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const Textarea = ({
  label,
  error,
  helperText,
  size = 'md',
  variant = 'default',
  resize = 'vertical',
  className,
  id,
  ...props
}: TextareaProps) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg',
  };

  const variants = {
    default: 'bg-dark-800 border-dark-600 focus:border-primary-500',
    filled: 'bg-dark-700 border-transparent focus:border-primary-500',
    outlined: 'bg-transparent border-dark-600 focus:border-primary-500',
  };

  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-dark-200 mb-2"
        >
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        className={clsx(
          'w-full border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20',
          sizes[size],
          variants[variant],
          resizeClasses[resize],
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
            : '',
          props.disabled
            ? 'opacity-50 cursor-not-allowed bg-dark-800/50'
            : '',
          className
        )}
        {...props}
      />

      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}

      {helperText && !error && (
        <p className="mt-1 text-sm text-dark-400">{helperText}</p>
      )}
    </div>
  );
};

export default Textarea;
