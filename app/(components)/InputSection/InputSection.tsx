import React from "react";
interface InputSectionProps {
    type: string;
    placeholder: string;
}

const InputSection: React.FC<InputSectionProps> = ({ type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} required />
  );
};

export default InputSection;
