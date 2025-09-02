import { CardProps } from '../../interfaces';

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
