import React, { useEffect, useRef } from 'react';
import TCPlayer from 'tcplayer.js';
import 'tcplayer.js/dist/tcplayer.min.css';

interface ReactTCPlayerProps {
  /** 视频地址（MP4/HLS/FLV） */
  videoUrl: string;
  /** 是否自动播放（移动端可能受限） */
  autoplay?: boolean;
  /** 腾讯云点播 FileID（如果使用点播） */
  fileID?: string;
  /** 腾讯云点播 AppID（如果使用点播） */
  appID?: string;
  /** 播放器宽度（默认 '100%'） */
  width?: string;
  /** 播放器高度（默认 'auto'） */
  height?: string;
}

const ReactTCPlayer: React.FC<ReactTCPlayerProps> = ({
  videoUrl,
  autoplay = false,
  fileID = '',
  appID = '',
  width = '100%',
  height = 'auto',
}) => {
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const playerInstance = useRef<TCPlayer | null>(null);

  useEffect(() => {
    if (!playerContainerRef.current || playerInstance.current) return;

    // 初始化播放器
    playerInstance.current = new TCPlayer(playerContainerRef.current, {
      source: videoUrl,     // 直接传入视频地址
      fileID,              // 腾讯云点播 FileID（二选一）
      appID,              // 腾讯云点播 AppID（二选一）
      autoplay,           // 是否自动播放
      width,             // 播放器宽度
      height,           // 播放器高度
      controls: true,   // 显示控制条
      // 更多配置见腾讯云文档
    });

    return () => {
      // 组件卸载时销毁播放器
      if (playerInstance.current) {
        playerInstance.current.dispose();
        playerInstance.current = null;
      }
    };
  }, [videoUrl, autoplay, fileID, appID, width, height]);

  return (
    <div className="tcp-player-container">
      <div ref={playerContainerRef} id="player-container"></div>
    </div>
  );
};

export default ReactTCPlayer;