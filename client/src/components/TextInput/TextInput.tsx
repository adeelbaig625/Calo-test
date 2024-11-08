import { FC } from 'react';
import './text-input.css';

type TextInputProps = {
    value: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    onChange: (value: string) => void;
    className?: string;
    width?: string;
    ref?: React.Ref<HTMLInputElement>; // Add ref for react-hook-form
};

const TextInput: FC<TextInputProps> = ({
    value,
    placeholder = '',
    type = 'text',
    width = '100%',
    onChange,
    className = '',
    ref,
}) => {
    return (
        <input
            ref={ref} // Pass the ref to the input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className={`text-input-field ${className}`}
            style={{ width }} // Apply dynamic width from props
        />
    );
};

export default TextInput;
