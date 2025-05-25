import React from 'react';

function UserProfile({ user }) {
    return (
        <div>
            <h2>{user.login}</h2>
            <img src={user.avatar_url} alt="Avatar" width="100" />
            <p>{user.bio}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
        </div>
    );
}

export default UserProfile;
