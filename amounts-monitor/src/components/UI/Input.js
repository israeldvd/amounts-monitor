import React, { useImperativeHandle, useRef } from "react";
import input_styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const giveFocus = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            ...inputRef.current,
            activate: giveFocus,
        };
    });

    return (
        <div className={input_styles.setter}>
            <label htmlFor={props.name} className={input_styles.label}>
                {props.label}
            </label>
            <input
                name={props.name}
                type={props.type}
                id={props.id}
                ref={inputRef}
                value={props.value}
                placeholder={props.placeholder}
                className={`${props.className}`}
                onChange={props.onChange}
                onBlur={props.onBlur}
                required={props.required}
            />
        </div>
    );
});

export default Input;
