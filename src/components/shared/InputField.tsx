import React from 'react'

interface InputFieldType {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    className?: string;
    error?: string;
    value: any;
    onChange: any;
    onBlur: any;
    touched: boolean | undefined;
}

const InputField = ({ label, name, type = "text", placeholder, className = "", error, value, onChange, onBlur, touched, ...props }: InputFieldType, ref: any) => {

    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className={`input input-bordered ${className}`}
                value={value}
                ref={ref}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                {...props}
            />
            {(error && touched) && <p className='text-xs text-red-500'>{error}</p>}
        </div>
    )
}

export default React.forwardRef(InputField)