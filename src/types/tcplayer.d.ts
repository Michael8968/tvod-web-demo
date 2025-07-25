declare module "tcplayer.js" {
  class TCPlayer {
    constructor(container: HTMLElement | string, options: TCPlayerOptions);
    dispose(): void;
    on(event: string, callback: () => void): void;
    // 其他方法（如 play(), pause() 等，按需补充）
  }

  interface TCPlayerOptions {
    source?: string;
    fileID?: string;
    appID?: string;
    autoplay?: boolean;
    width?: string | number;
    height?: string | number;
    controls?: boolean;
    licenseUrl?: string;
    sources?: {
      src: string;
    }[];
    psign?: string;
    // 其他配置项（参考腾讯云文档）
  }

  export default TCPlayer;
}
