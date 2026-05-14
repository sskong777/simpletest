declare global {
  interface Window {
    Kakao?: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: KakaoFeedShareOptions) => void;
      };
    };
  }
}

export const KAKAO_JS_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
export const isKakaoEnabled = Boolean(KAKAO_JS_KEY);

export const KAKAO_SDK_SRC =
  "https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js";
export const KAKAO_SDK_INTEGRITY =
  "sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4yyC7wy6K1Hs90nka";

type Link = { mobileWebUrl: string; webUrl: string };

export type KakaoFeedShareOptions = {
  objectType: "feed";
  content: {
    title: string;
    description: string;
    imageUrl: string;
    link: Link;
  };
  buttons?: { title: string; link: Link }[];
};

export function initKakao() {
  if (typeof window === "undefined" || !KAKAO_JS_KEY) return;
  const Kakao = window.Kakao;
  if (!Kakao) return;
  if (!Kakao.isInitialized()) {
    Kakao.init(KAKAO_JS_KEY);
  }
}

/** Returns true if the SDK fired, false if it's unavailable (caller should fall back). */
export function shareToKakao(options: KakaoFeedShareOptions): boolean {
  if (typeof window === "undefined") return false;
  const Kakao = window.Kakao;
  if (!Kakao || !Kakao.isInitialized || !Kakao.isInitialized()) return false;
  try {
    Kakao.Share.sendDefault(options);
    return true;
  } catch {
    return false;
  }
}
