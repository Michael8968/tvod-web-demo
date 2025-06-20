import React from 'react';
import ReactTCPlayer from './ReactTCPlayer';

const App: React.FC = () => {
  return (
    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ReactTCPlayer
        videoUrl="https://1303528524.vod-qcloud.com/d553308avodsh1303528524/8292ca1f3560136623450992325/to7SwoQ7x6EA.mp4" // 直接播放 MP4
        autoplay={false}
        width="800px"
        height="450px"
        fileID="3560136623450992325"
        appID="1303528524"
      />
    </div>
  );
};

export default App;