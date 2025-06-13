import React from 'react';
import styles from './CatTagMessage.module.css';

function CatTagMessage({ tag }) {
    if (!tag) return null;

    return (
        <div className={styles.catTagMessage}>
            <div className={styles.speechBubble}>
                <img src="/pulsehub-chatbox.png" alt="말풍선" className={styles.chatboxImage} />
                <span className={styles.chatText}>
                    당신은 <strong>{tag.label}</strong>!<br />
                    {tag.description}
                </span>
            </div>
            <img src="/pulsehub-cat.png" alt="GitHub Cat" className={styles.catImage} />
        </div>

    );
}

export default CatTagMessage;
