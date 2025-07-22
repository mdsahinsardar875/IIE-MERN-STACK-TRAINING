import React from 'react';

const Banner = () => {
    return (
        <div style={{
            // padding: '40px 20px',
            borderRadius: '12px',
        }}>
            <img
                src="/image/banner.png"
                alt="Banner"
                style={{ width: '100%', borderRadius: '8px', height: '400px', objectFit: 'cover' }}
            />
        </div>
    );
};

export default Banner;