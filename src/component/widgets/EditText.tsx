import { TextField } from '@mui/material';
import React from 'react';

interface EditTextProps {
    label: string
    placeholder: string
    value: string | number | undefined
    onChange: Function
    validator?: RegExp | undefined
    maxLength: number
    type?: string
    required?: boolean
    toolTip?: Function
}

const EditText = (props: EditTextProps) => {
    return (

        <div className="input-wrap">
            <div className="d-flex align-items-center tooltip-loc">
                <label>{props.label}</label>
                <span className="d-flex ">{props.toolTip && props.toolTip()}</span>
            </div>
            <TextField
                placeholder={props.placeholder}
                value={props.value || ''}
                required={props.required || false}
                type={props.type || "text"}
                onChange={(event: any) => {
                    if (event.target.value.length <= props.maxLength) {
                        props.onChange(event.target.value);
                    }
                }}
            />
        </div>

    )
}

export default EditText;