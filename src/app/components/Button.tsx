import Link, { LinkProps } from 'next/link';
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps } from 'react';

type Props = {
  tag?: 'link' | 'button';
  text: string;
  link?: string;
  className?: HTMLProps<HTMLElement>['className'];
  variant?: 'primary' | 'secondary';
  linkProps?: LinkProps;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({
  tag = 'link',
  text,
  link,
  className,
  variant = 'primary',
  linkProps,
  ...rest
}: Props) => {
  return (
    <>
      {tag === 'link' ? (
        <Link
          {...linkProps}
          className={`${
            variant === 'primary' ? 'bg-primary' : 'bg-secondary'
          } ${className} text-sm font-light uppercase tracking-wider text-white `}
          href={link!}
        >
          {text}
        </Link>
      ) : (
        <button
          {...rest}
          className={`${
            variant === 'primary' ? 'bg-primary' : 'bg-secondary'
          } ${className} text-sm font-medium uppercase`}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
