// src/app/components/atoms/Button.js
import React from 'react';

function Button({ children, onClick, ...props }) {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 rounded-xl shadow-md font-semibold bg-black text-white hover:opacity-80 transition"
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
