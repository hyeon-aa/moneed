import axios from "axios";
import { http } from "../request";

type KakaoAuthPropsType = {
	authorizationCode: string
}

export const getKakaoLoginUrl = async()=> {
  const response = await axios.get(`/oauth2/kakao/kakao/url`);
  return response.data
}

export const kakaoAuth = async (data: KakaoAuthPropsType ) => {
	const response = await http.post(`/api/accounts/kakao/login`, data, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response;
};
