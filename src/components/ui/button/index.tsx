import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { children?: React.ReactNode };

export const Button: React.FC<ButtonProps> = ({ children, style, ...props }) => {
  return (
    <button
      {...props}
      style={{
        padding: '10px 18px',
        borderRadius: 10,
        background: '#06B6D4',
        color: '#021',
        fontWeight: 700,
        border: 'none',
        cursor: 'pointer',
        ...style
      }}
    >
      {children}
    </button>
  );
};
