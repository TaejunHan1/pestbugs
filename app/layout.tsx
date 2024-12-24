"use client";

import "./globals.css";
import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronRight,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  LucideIcon,
} from "lucide-react";

// 인터페이스 정의
interface SocialLink {
  name: string;
  Icon: LucideIcon;
  href: string;
}

interface NavItem {
  name: string;
  path: string;
}

interface FooterLink {
  name: string;
  href: string;
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 네비게이션 아이템
  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  // 푸터 링크
  const footerLinks: {
    services: FooterLink[];
    support: FooterLink[];
  } = {
    services: [
      { name: "해충 방제", href: "/services#pest" },
      { name: "쥐 방제", href: "/services#rodent" },
      { name: "위생 관리", href: "/services#sanitation" },
      { name: "살균 소독", href: "/services#sterilization" },
    ],
    support: [
      { name: "서비스 문의", href: "/contact" },
      { name: "방역 컨설팅", href: "/contact#consulting" },
      { name: "제품 구매", href: "/services#products" },
      { name: "견적 요청", href: "/contact#quote" },
    ],
  };

  // 소셜 미디어 링크
  const socialLinks: SocialLink[] = [
    { name: "Facebook", Icon: Facebook, href: "#" },
    { name: "Instagram", Icon: Instagram, href: "#" },
    { name: "Youtube", Icon: Youtube, href: "#" },
  ];

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50">
        {/* Top Bar */}
        <div className="bg-green-900 text-white py-2 hidden md:block">
          <div className="max-w-[1140px] mx-auto px-6 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>평일 09:00 - 18:00</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>서울시 강남구 테헤란로 123</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="tel:1588-1234"
                className="flex items-center hover:text-green-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-1" />
                <span>1588-1234</span>
              </a>
              <a
                href="mailto:contact@pestking.com"
                className="flex items-center hover:text-green-300 transition-colors"
              >
                <Mail className="w-4 h-4 mr-1" />
                <span>contact@pestking.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Header */}
        <header
          className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
            isScrolled ? "shadow-md" : ""
          }`}
        >
          <div className="max-w-[1140px] mx-auto px-6">
            <nav className="flex items-center justify-between h-20">
              {/* 로고 */}
              <Link href="/" className="font-bold text-2xl text-green-600">
                방역쟁이
              </Link>

              {/* 데스크톱 메뉴 */}
              <ul className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                >
                  상담 신청
                </motion.button>
              </ul>

              {/* 모바일 메뉴 버튼 */}
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="메뉴 열기/닫기"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </nav>
          </div>

          {/* 모바일 메뉴 */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-t"
            >
              <div className="max-w-[1140px] mx-auto px-6 py-4">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className="flex items-center justify-between text-gray-600 hover:text-green-600 transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                        <ChevronRight className="w-5 h-5" />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      상담 신청
                    </button>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white pt-16 pb-8">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* 회사 정보 */}
              <div>
                <h3 className="text-xl font-bold mb-4">방역쟁이</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  25년 방역업체 근무 경험을 살려 금형/사출로 방역용품을
                  직접 개발·제조·유통하는 전문기업입니다.
                </p>
              </div>

              {/* 서비스 */}
              <div>
                <h3 className="font-semibold mb-4">서비스</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {footerLinks.services.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 고객 지원 */}
              <div>
                <h3 className="font-semibold mb-4">고객 지원</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {footerLinks.support.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 연락처 */}
              <div>
                <h3 className="font-semibold mb-4">연락처</h3>
                <div className="space-y-4 text-sm text-gray-400">
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>1588-1234</span>
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>contact@pestking.com</span>
                  </p>
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>서울시 강남구 테헤란로 123</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 하단 정보 */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} 방역쟁이. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  {socialLinks.map((social) => {
                    const SIcon = social.Icon;
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={social.name}
                      >
                        <SIcon className="w-5 h-5" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}  
