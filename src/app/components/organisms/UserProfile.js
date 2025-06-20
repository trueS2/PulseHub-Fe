import React from 'react';
import Avatar from '../atoms/Avatar';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import FollowInfo from '../atoms/FollowInfo';
import styles from './UserProfile.module.css';

function UserProfile({ user }) {
    return (
        <div>
            <Heading level={3}>{user.login}</Heading>

            <div className={styles.profileRow}>
                <Avatar src={user.avatar_url} alt={`${user.login}'s avatar`} />
                <div className={styles.profileInfo}>
                    <Text>{user.bio}</Text>
                    <FollowInfo followers={user.followers} following={user.following} />
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
