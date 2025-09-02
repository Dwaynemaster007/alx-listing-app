import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

// Add more interfaces as needed for other components or data structures
