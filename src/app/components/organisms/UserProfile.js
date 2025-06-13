import React from 'react';
import Avatar from '../atoms/Avatar';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import FollowInfo from '../atoms/FollowInfo';
import styles from './UserProfile.module.css'; // ✅ CSS 모듈 추가

function UserProfile({ user }) {
    return (
        <div>
            <Heading level={3}>{user.login}</Heading>

            {/* ✅ 아바타 + 팔로워 수를 가로로 묶기 */}
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
