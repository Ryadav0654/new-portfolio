import React from "react";

const Input = ({
  type,
  className = "",
  onchange,
  labelName,
  id,
  placeholder,
  ...props
}: {
  type: string;
  className?: string;
  labelName?: string;
  onchange?: any;
  placeholder?: string;
  id:string;
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm lg:text-lg font-bold text-black mb-2"
      >
        {labelName}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...props}
        className={`placeholder:text-black/75 w-full px-3 py-2 font-semibold bg-gray-300 text-black rounded-xl ${className}`}
        onChange={onchange}
      />
    </>
  );
};

export default Input;
