import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoRedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {
      console.log("카카오 리다이렉트 페이지 도착");
    });

    if (code) {
      console.log("code", code);
    } else {
      console.log("code가 없음");
    }

    const fetchToken = async () => {
      try {
        console.log("try");
        const baseUrl = import.meta.env.VITE_DEV_BASE_URL;
        const res = await fetch(`${baseUrl}/oauth2/kakao/code?code=${code}`);
        const tokenData = await res.json();

        if (tokenData?.access_token) {
          localStorage.setItem("access_token", tokenData.access_token);
          navigate("/");
        } else {
          throw new Error("토큰 없음");
        }
      } catch (err) {
        console.error("토큰 요청 실패:", err);
        alert("로그인에 실패했습니다.");
        navigate("/onboarding");
      }
    };

    if (code) {
      fetchToken();
    } else {
      navigate("/onboarding");
    }
  }, []);

  return <div>로그인 처리 중...</div>;
};

export default KakaoRedirectHandler;
