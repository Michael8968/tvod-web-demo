import React from 'react';
import ReactTCPlayer from './ReactTCPlayer';

const App: React.FC = () => {
  return (
    <div>
      <h1>TCPlayer + React + TypeScript 示例</h1>
      <ReactTCPlayer
        videoUrl="https://example.com/video.mp4" // 直接播放 MP4
        // fileID="12345"                      // 或使用腾讯云点播
        // appID="123456789"
        autoplay={false}
        width="800px"
        height="450px"
      />
    </div>
  );
};

export default App;