// src/app/components/atoms/Heading.js
import React from 'react';

function Heading({ level = 2, children }) {
    const Tag = `h${level}`;
    return <Tag>{children}</Tag>;
}

export default Heading;
