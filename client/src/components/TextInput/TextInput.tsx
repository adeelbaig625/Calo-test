import React, { forwardRef } from "react"
import "./text-input.css"

type TextInputProps = {
  value: string
  placeholder?: string
  type?: "text" | "password" | "email" | "number"
  onChange: (value: string) => void
  className?: string
  width?: string
}

// Wrap the component with forwardRef
const TextInput: React.FC<TextInputProps> = forwardRef<
  HTMLInputElement,
  TextInputProps
>(
  (
    {
      value = "",
      placeholder = "",
      type = "text",
      width = "100%",
      onChange,
      className = "",
    },
    ref
  ) => {
    return (
      <input
        ref={ref} // Attach the ref here
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          console.log(e.target.value)
          onChange(e.target.value)
        }}
        className={`text-input-field ${className}`}
        style={{ width }}
      />
    )
  }
)

export default TextInput
