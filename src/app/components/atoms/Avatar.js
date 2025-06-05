// src/app/components/atoms/Avatar.js
import React from 'react';

function Avatar({ src, alt, size = 100 }) {
    return <img src={src} alt={alt} width={size} height={size} />;
}

export default Avatar;
