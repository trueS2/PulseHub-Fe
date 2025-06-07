// src/app/components/atoms/Heading.js
import React from 'react';
import styles from './Heading.module.css';

function Heading({ level = 2, children }) {
    const Tag = `h${level}`;
    const headingClass = `${styles.heading} ${styles[`h${level}`]}`;

    return <Tag className={headingClass}>{children}</Tag>;
}

export default Heading;
