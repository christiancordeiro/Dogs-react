import React from "react"
import styles from "./Input.module.css"

const Input = ({ label, type, name, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        className={styles.input}
        name={name}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
