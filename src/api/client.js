// 파일: src/api/client.js
// 목적: 프론트 전역에서 공통으로 쓸 Axios 인스턴스를 생성합니다.
//  - baseURL을 "/api"로 고정해 모든 요청을 상대경로로 보냅니다.
//  - Nginx가 "/api"를 도커 네트워크의 backend:8080으로 프록시하므로
//    CORS와 환경별 절대 URL 문제를 줄일 수 있습니다.

import axios from "axios";

// 1) 공용 Axios 인스턴스 생성
const api = axios.create({
  baseURL: "/api", // 모든 요청이 "/api/..."로 나가도록 기본 경로 설정
  // 필요시 공통 옵션 추가 가능 (예: timeout)
  // timeout: 10000,
});

// 2) 요청 인터셉터
//    - 요청이 나가기 전에 localStorage의 JWT를 자동으로 헤더에 첨부
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`; // 표준 Bearer 스킴
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
