import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'outlined';
}

const Input = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  size = 'md',
  variant = 'default',
  className,
  id,
  ...props
}: InputProps) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

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

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-dark-200 mb-2"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400">
            {leftIcon}
          </div>
        )}

        <input
          id={inputId}
          className={clsx(
            'w-full border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20',
            sizes[size],
            variants[variant],
            leftIcon ? 'pl-10' : '',
            rightIcon ? 'pr-10' : '',
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

        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400">
            {rightIcon}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}

      {helperText && !error && (
        <p className="mt-1 text-sm text-dark-400">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
