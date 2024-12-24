import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn"], // 경고로 변경
      "@typescript-eslint/no-explicit-any": "off",   // 필요 시 'any' 타입 허용
      "react/no-unescaped-entities": "off",          // 특수 문자 관련 규칙 비활성화
    },
  },
];


export default eslintConfig;
