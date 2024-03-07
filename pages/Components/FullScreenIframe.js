import React from 'react';

const FullScreenIframe = ({ src }) => {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src={src}
        frameBorder="0"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>
  );
};

export default FullScreenIframe;