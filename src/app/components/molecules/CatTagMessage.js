import React from 'react';
import styles from './CatTagMessage.module.css';

function CatTagMessage({ tag }) {
    if (!tag) return null;

    return (
        <div className={styles.catTagMessage}>
            <img src="/pulsehub-cat.png" alt="GitHub Cat" className={styles.catImage} />
            <div className={styles.speechBubble}>
                당신은 <strong>{tag.label}</strong>!<br />
                {tag.description}
            </div>
        </div>
    );
}

export default CatTagMessage;
