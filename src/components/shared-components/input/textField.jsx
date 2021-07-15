import css from './textField.module.css'
export const TextField = ({onChange, value, placeholder, disabled, label, required, inputRef}) => {
    return (
        <div className={css.container}>
            <span className={css.label}>{label}</span>
            <input ref={inputRef} className={css.input} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} required={required} />
        </div>
    )
}