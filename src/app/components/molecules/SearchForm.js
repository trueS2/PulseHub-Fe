import React from 'react';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';

function SearchForm({ username, setUsername, onSearch }) {
    return (
        <div>
            <InputField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="GitHub 아이디 입력"
            />
            <Button onClick={onSearch}>검색</Button>
        </div>
    );
}

export default SearchForm;
