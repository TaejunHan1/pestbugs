'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Wrench, ArrowRight, ChevronRight, Activity, Package2, CheckCircle2, Award, 
  Shield, Users, Star, Phone,  Zap,
  Bug, 
  MousePointer, Sparkles, Target,
  Factory,
  Store,
  Warehouse
} from "lucide-react";

export default function Home() {
  // State management
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showContactModal, setShowContactModal] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Consultation form state
  const [consultation, setConsultation] = useState({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    message: ''
  });

  // Product categories
  const categories = [
    { id: 'all', name: '전체 보기', icon: Package2 },
    { id: 'rodent', name: '쥐 방역용품', icon: MousePointer },
    { id: 'insect', name: '해충 방역용품', icon: Bug },
    { id: 'monitoring', name: '모니터링 도구', icon: Target },
    { id: 'sanitizer', name: '살균/소독용품', icon: Sparkles }
  ];

  // Product data
  const products = [
    {
      id: 1,
      name: "개선형 쥐터널",
      category: "rodent",
      description: "끈끈이 빠짐을 보완한 새로운 구조. UV 차단제로 내구성 향상",
      features: [
        "벽면부착 가능",
        "UV 차단 코팅",
        "내구성 강화",
        "쉬운 설치"
      ],
      specifications: {
        size: "300 x 100 x 80mm",
        material: "ABS 플라스틱",
        color: "블랙/그레이",
        weight: "450g"
      },
      price: "35,000원",
      image: "/pestkill4.jpg",
      stock: true
    },
    {
      id: 2,
      name: "돌모양 쥐먹이 상자",
      category: "rodent",
      description: "주변 환경과 조화로운 디자인의 안전한 쥐약 투여 장치",
      features: [
        "자연스러운 디자인",
        "안전 잠금장치",
        "방수 처리",
        "견고한 구조"
      ],
      specifications: {
        size: "250 x 200 x 150mm",
        material: "특수 강화 플라스틱",
        color: "스톤 그레이",
        weight: "800g"
      },
      price: "42,000원",
      image: "/pestkill5.jpg",
      stock: true
    },
    {
      id: 3,
      name: "신형 포충등",
      category: "insect",
      description: "에너지 효율적이고 강력한 포충 성능",
      features: [
        "LED UV 램프",
        "저전력 설계",
        "쉬운 유지보수",
        "강력 흡입력"
      ],
      specifications: {
        size: "400 x 300 x 150mm",
        material: "알루미늄/ABS",
        power: "20W",
        coverage: "100㎡"
      },
      price: "180,000원",
      image: "/pestkill6.jpg",
      stock: true
    }
  ];

  // Success stories data
  const successStories = [
    {
      client: "A 식품제조공장",
      industry: "식품 제조업",
      challenge: "지속적인 쥐 침입 문제로 위생 관리에 어려움을 겪음",
      solution: "개선형 쥐터널 20개소 설치 및 돌모양 쥐먹이 상자 15개소 배치",
      result: "설치 후 6개월 내 완전 퇴치 달성, HACCP 인증 평가 통과",
      Icon: Factory, // 아이콘으로 변경
      testimonial: "방역쟁이의 제품은 타사 제품과 확실히 다른 효과를 보여줬습니다."
    },
    {
      client: "B 물류센터",
      industry: "물류업",
      challenge: "넓은 공간의 해충 개체 수 증가로 어려움",
      solution: "신형 포충등 시스템 구축 및 주기적 모니터링",
      result: "해충 개체 수 90% 감소, 위생 점검 A등급 획득",
      Icon: Warehouse, // 아이콘으로 변경
      testimonial: "효과적인 방제 시스템 덕분에 깨끗한 환경을 유지할 수 있게 되었습니다."
    },
    {
      client: "C 프랜차이즈",
      industry: "외식업",
      challenge: "매장 내 바퀴벌레 출현으로 고객 컴플레인 발생",
      solution: "바퀴겔칼 및 모니터링 시스템 도입",
      result: "3개월 내 완전 퇴치, 고객 만족도 상승",
      Icon: Store, // 아이콘으로 변경
      testimonial: "전문적이고 체계적인 방제 솔루션에 매우 만족합니다."
    }
  ];

  // Statistics data
  const statistics = [
    {
      number: "25년+",
      label: "현장 경험",
      description: "방역 현장에서 쌓은 노하우"
    },
    {
      number: "3,000+",
      label: "납품 실적",
      description: "전국 방역업체 신뢰"
    },
    {
      number: "98%",
      label: "문제 해결률",
      description: "현장 중심 솔루션"
    },
    {
      number: "12개",
      label: "특허/인증",
      description: "검증된 기술력"
    }
  ];

  // Quality certification data
  const certifications = [
    {
      title: "디자인 특허",
      description: "돌모양 쥐먹이 상자 디자인 특허 등록",
      date: "2022.09",
      icon: Award
    },
    {
      title: "품질 경영",
      description: "ISO 9001 품질경영시스템 인증",
      date: "2021.06",
      icon: Shield
    },
    {
      title: "기술 혁신",
      description: "중소기업청 기술혁신형 기업 선정",
      date: "2020.12",
      icon: Zap
    }
  ];

  // Calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle consultation form submission
  const handleConsultationSubmit = (e : any) => {
    e.preventDefault();
    console.log('상담 신청:', consultation);
    setShowContactModal(false);
    setConsultation({
      name: '',
      phone: '',
      email: '',
      companyName: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-green-500 to-blue-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating consultation button */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <button 
          onClick={() => setShowContactModal(true)}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center group"
        >
          <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative bg-white py-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-50" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/80" />
        </div>
        <div className="max-w-[1140px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              25년 노하우의 방역 전문가
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              방역쟁이, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                현장에서 직접 만든<br />
                방역용품
              </span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg sm:text-xl max-w-xl">
              방역업체에서 25년 넘게 근무하며 쌓은 노하우를 바탕으로, 
              필요한 물품을 직접 개발·개선·제조·유통합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#products">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium inline-flex items-center group"
                >
                  제품 살펴보기
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="mailto:lgg0708@naver.com">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-medium inline-flex items-center group"
                >
                  문의하기
                  <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-blue-200 opacity-20 rounded-3xl transform rotate-3" />
            <div className="relative bg-white rounded-3xl shadow-xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-6 rounded-xl">
                  <Wrench className="w-10 h-10 text-green-500 mb-4" />
                  <h3 className="font-semibold text-gray-800">금형/사출 전문</h3>
                  <p className="text-sm text-gray-600 mt-2">자체 생산라인 보유</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Shield className="w-10 h-10 text-blue-500 mb-4" />
                  <h3 className="font-semibold text-gray-800">품질 보증</h3>
                  <p className="text-sm text-gray-600 mt-2">12개 인증 보유</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <Users className="w-10 h-10 text-purple-500 mb-4" />
                  <h3 className="font-semibold text-gray-800">전문가 상담</h3>
                  <p className="text-sm text-gray-600 mt-2">맞춤형 솔루션</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <Star className="w-10 h-10 text-orange-500 mb-4" />
                  <h3 className="font-semibold text-gray-800">고객 만족</h3>
                  <p className="text-sm text-gray-600 mt-2">98% 해결률</p>
                </div>
              </div>
              
              <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                <div className="flex items-center mb-4">
                  <Activity className="w-6 h-6 text-green-500 mr-3" />
                  <h4 className="font-semibold text-gray-800">최근 실적</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">납품 건수</span>
                    <span className="font-semibold text-gray-800">3,000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">전국 거래처</span>
                    <span className="font-semibold text-gray-800">500+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">평균 만족도</span>
                    <span className="font-semibold text-green-500">4.9/5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 bg-gray-50" id="products">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">제품 라인업</h2>
          
          {/* Category filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full inline-flex items-center transition-all ${
                    activeCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(product => activeCategory === 'all' || product.category === activeCategory)
              .map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-t-xl"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <span className="text-green-600 font-medium">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-gray-100">
                        <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                          상세정보 보기
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">고객 성공 사례</h2>
          <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
  <motion.div
    key={index}
    whileHover={{ y: -10 }}
    className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
  >
    <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
      <story.Icon className="w-24 h-24 text-gray-400" />
    </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {story.client}
                    </h3>
                    <p className="text-gray-500 text-sm">{story.industry}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-red-500">문제상황: </span>
                        {story.challenge}
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-blue-500">해결방안: </span>
                        {story.solution}
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-green-500">결과: </span>
                        {story.result}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 italic">
                      "{story.testimonial}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-xl mb-2">{stat.label}</p>
                <p className="text-sm text-gray-300">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">상담 신청</h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleConsultationSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">이름</label>
                <input
                  type="text"
                  value={consultation.name}
                  onChange={(e) => setConsultation({...consultation, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">연락처</label>
                <input
                  type="tel"
                  value={consultation.phone}
                  onChange={(e) => setConsultation({...consultation, phone: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">이메일</label>
                <input
                  type="email"
                  value={consultation.email}
                  onChange={(e) => setConsultation({...consultation, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">문의내용</label>
                <textarea
                  value={consultation.message}
                  onChange={(e) => setConsultation({...consultation, message: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                상담 신청하기
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

