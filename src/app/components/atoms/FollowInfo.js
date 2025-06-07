// src/app/components/molecules/FollowInfo.js
import React from 'react';
import Text from './Text';

function FollowInfo({ followers, following }) {
    return (
        <div>
            <Text>Followers: {followers}</Text>
            <Text>Following: {following}</Text>
        </div>
    );
}

export default FollowInfo;
