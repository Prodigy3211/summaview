
"use client";

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: ButtonVariant;
}

export default function Button ({label, variant = 'primary', onClick}: ButtonProps){
  
    
    const styles = "px-4 py-2 rounded-md font-medium transition-all"
    const variants: Record<ButtonVariant, string> = {
        primary : 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
        danger: 'bg-red-600 hover:bg-red-700 text-white',
    };



    return (
        <button 
        onClick={onClick}
        className={`${styles} ${variants[variant]}`}
        >
            {label} 
        </button>
    );
}