import React from "react";
import style from "./FormsControls.module.css"


export const Input = ({meta, input, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                <input className={style.input} {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}