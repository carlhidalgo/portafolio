
import { clsx } from 'clsx';
import { ReactNode, HTMLAttributes, AnchorHTMLAttributes } from 'react';

type CardProps = (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & HTMLAttributes<HTMLDivElement>)
) & {
  children?: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  variant?: 'default' | 'featured' | 'minimal';
  hover?: boolean;
};

const Card = ({
  children,
  className,
  title,
  description,
  image,
  href,
  variant = 'default',
  hover = false,
  ...props
}: CardProps) => {
  const baseClasses = 'bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl shadow-xl transition-all duration-300';
  const variants = {
    default: 'p-6',
    featured: 'p-8 border-primary-500/50 shadow-glow',
    minimal: 'p-4 border-dark-600/50',
  };
  const hoverClasses = hover ? 'hover:border-primary-500/50 hover:shadow-glow hover:-translate-y-1' : '';
  const classes = clsx(
    baseClasses,
    variants[variant],
    hoverClasses,
    className
  );
  const content = (
    <>
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title || 'Card image'}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      {title && (
        <h3 className="text-xl font-semibold text-dark-100 mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-dark-300 mb-4 line-clamp-3">
          {description}
        </p>
      )}
      {children}
    </>
  );
  // Props personalizados a filtrar
  const customProps = [
    'title', 'description', 'image', 'variant', 'hover', 'href', 'children', 'className'
  ];

  // Filtra props nativos para <a>
  function filterAnchorProps(obj: any) {
    const result: any = {};
    Object.keys(obj).forEach(key => {
      if (!customProps.includes(key)) {
        result[key] = obj[key];
      }
    });
    return result;
  }

  // Filtra props nativos para <div>
  function filterDivProps(obj: any) {
    const result: any = {};
    Object.keys(obj).forEach(key => {
      if (!customProps.includes(key)) {
        result[key] = obj[key];
      }
    });
    return result;
  }

  if (href) {
    const anchorProps = filterAnchorProps(props);
    return (
      <a
        href={href}
        className={classes}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }
  const divProps = filterDivProps(props);
  return (
    <div className={classes} {...divProps}>
      {content}
    </div>
  );
};

export default Card;
