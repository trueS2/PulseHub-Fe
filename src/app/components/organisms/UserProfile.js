// src/app/components/organisms/UserProfile.js
import React from 'react';
import Avatar from '../atoms/Avatar';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import FollowInfo from '../molecules/FollowInfo';

function UserProfile({ user }) {
    return (
        <div>
            <Heading level={3}>{user.login}</Heading>
            <Avatar src={user.avatar_url} alt={`${user.login}'s avatar`} />
            <Text>{user.bio}</Text>
            <FollowInfo followers={user.followers} following={user.following} />
        </div>
    );
}

export default UserProfile;
