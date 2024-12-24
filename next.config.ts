import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ESLint 설정: 빌드 시 Linting 무시
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // React Strict Mode 활성화
  reactStrictMode: true,
  
  // 이미지 최적화 설정
  images: {
    domains: ["example.com"], // 외부 이미지 도메인 허용 (필요에 따라 수정)
  },

  // 출력 설정 (Netlify 배포 최적화)
  output: "standalone",
};

export default nextConfig;
