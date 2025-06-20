import React, { useEffect, useRef } from "react";
import TCPlayer from "tcplayer.js";
import "tcplayer.js/dist/tcplayer.min.css";

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

const psign =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6MTMwMzUyODUyNCwiZmlsZUlkIjoiMzU2MDEzNjYyMzQ1MDk5MjMyNSIsImN1cnJlbnRUaW1lU3RhbXAiOjE3NTA0MDY5OTMsImNvbnRlbnRJbmZvIjp7ImF1ZGlvVmlkZW9UeXBlIjoiT3JpZ2luYWwifSwidXJsQWNjZXNzSW5mbyI6eyJkb21haW4iOiIxMzAzNTI4NTI0LnZvZC1xY2xvdWQuY29tIiwic2NoZW1lIjoiSFRUUFMifX0.bcDaJOJ5IMEC9U30d9UvlAA7fA2RDm847yBiIchB-5s";

const ReactTCPlayer: React.FC<ReactTCPlayerProps> = ({
  videoUrl,
  autoplay = false,
  fileID = "",
  appID = "",
  width = "100%",
  height = "auto",
}) => {
  const playerContainerRef = useRef<HTMLVideoElement>(null);
  const playerInstance = useRef<TCPlayer | null>(null);

  useEffect(() => {
    if (!playerContainerRef.current || playerInstance.current) return;
    if (!videoUrl || !fileID || !appID) return;
    if (!document.getElementById("player-container-id")) return;

    // 初始化播放器
    try {
      playerInstance.current = new TCPlayer(playerContainerRef.current, {
        //   source: videoUrl,     // 直接传入视频地址
        fileID, // 腾讯云点播 FileID（二选一）
        appID, // 腾讯云点播 AppID（二选一）
        psign: psign, 
      });
      playerInstance.current.on("play", () => {
        console.log("play");
      });
      playerInstance.current.on("pause", () => {
        console.log("pause");
      });
      playerInstance.current.on("ended", () => {
        console.log("ended");
      });
    } catch (error) {
      console.error("播放器初始化失败:", error);
    }

    return () => {
      // 组件卸载时销毁播放器
    //   if (playerInstance.current) {
    //     playerInstance.current.dispose();
    //     playerInstance.current = null;
    //   }
    };
  }, [videoUrl, autoplay, fileID, appID, width, height]);

  return (
    <div className="tcp-player-container">
      {/* <div ref={playerContainerRef} id="player-container"></div> */}
      {/* <video
        id="player-container-id"
        width="414"
        height="270"
        preload="auto"
        playsInline
        webkit-playsinline="true"
        controls
        ref={playerContainerRef}
      /> */}
      <video ref={playerContainerRef} id="player-container-id" width="414" height="270" preload="auto" playsInline webkit-playsinline="true"></video>
    </div>
  );
};

export default ReactTCPlayer;
