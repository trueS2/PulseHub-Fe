import React from 'react';
import styles from './InputField.module.css';

function InputField({ value, onChange, placeholder }) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={styles.input}
        />
    );
}

export default InputField;
