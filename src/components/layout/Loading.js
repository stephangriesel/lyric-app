import React from 'react';
import loading from './loading.gif';

export default () => {
    return (
        <div>
            <img src={loading}
            alt="Loading..."
            style={{width:'150px',margin: ' 40px auto', display: 'block' }}
            />
        </div>
    );
};