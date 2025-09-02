import { ButtonProps } from '../../interfaces';

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
