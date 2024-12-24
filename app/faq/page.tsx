'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, ChevronDown,
  DollarSign, Clock, Shield, AlertTriangle,
  Calendar, FileText, Bug, Phone, Mail, MessageSquare,
  CheckCircle2
} from 'lucide-react';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  // FAQ 카테고리
  const categories = [
    { id: 'all', name: '전체', icon: FileText },
    { id: 'service', name: '서비스', icon: Shield },
    { id: 'pricing', name: '비용/견적', icon: DollarSign },
    { id: 'process', name: '진행절차', icon: Clock },
    { id: 'safety', name: '안전/효과', icon: AlertTriangle }
  ];

  // FAQ 데이터
  const faqData = [
    {
      category: 'service',
      question: '어떤 종류의 해충을 방제할 수 있나요?',
      answer: '바퀴벌레, 개미, 쥐, 해충 등 대부분의 해충에 대한 방제가 가능합니다. 현장 조사 후 최적의 방제 방법을 제안해드립니다.',
      keywords: ['해충', '방제', '바퀴벌레', '개미', '쥐']
    },
    {
      category: 'service',
      question: '방제 효과는 얼마나 지속되나요?',
      answer: '일반적으로 3-6개월 정도 효과가 지속되며, 정기적인 관리를 통해 지속적인 효과를 유지할 수 있습니다. 환경과 대상에 따라 차이가 있을 수 있습니다.',
      keywords: ['효과', '지속', '기간', '관리']
    },
    {
      category: 'pricing',
      question: '서비스 비용은 어떻게 책정되나요?',
      answer: '방제 대상, 면적, 서비스 횟수 등에 따라 비용이 책정됩니다. 현장 방문 후 정확한 견적을 제공해드립니다. 기본 서비스는 회당 15만원부터 시작합니다.',
      keywords: ['비용', '가격', '견적', '요금']
    },
    {
      category: 'pricing',
      question: '정기 관리 계약 시 혜택이 있나요?',
      answer: '정기 계약 시 기본 20% 할인이 적용되며, 긴급 방문 서비스를 무상으로 제공해드립니다. 또한, 분기별 무료 점검 서비스가 포함됩니다.',
      keywords: ['정기', '계약', '할인', '혜택']
    },
    {
      category: 'process',
      question: '방제 작업은 얼마나 걸리나요?',
      answer: '일반 가정집 기준 2-3시간, 상업시설은 4-8시간 정도 소요됩니다. 규모와 상태에 따라 차이가 있을 수 있으며, 사전에 소요시간을 안내해드립니다.',
      keywords: ['시간', '소요', '작업']
    },
    {
      category: 'process',
      question: '긴급 방문도 가능한가요?',
      answer: '24시간 긴급 출동 서비스를 운영하고 있으며, 접수 후 2시간 이내 방문을 원칙으로 합니다. 긴급 출동 시 추가 비용이 발생할 수 있습니다.',
      keywords: ['긴급', '방문', '출동']
    },
    {
      category: 'safety',
      question: '사용하는 약품은 안전한가요?',
      answer: '모든 약품은 식약처 승인을 받은 안전한 제품을 사용하며, WHO 기준에 부합하는 친환경 약제를 주로 사용합니다. 인체와 환경에 미치는 영향을 최소화하였습니다.',
      keywords: ['안전', '약품', '친환경']
    },
    {
      category: 'safety',
      question: '반려동물이 있는데 안전한가요?',
      answer: '반려동물에게 안전한 약제를 사용하며, 작업 중 및 작업 후 일정 시간 동안은 반려동물의 접근을 제한하는 것을 권장합니다. 구체적인 주의사항을 안내해드립니다.',
      keywords: ['반려동물', '안전', '주의사항']
    }
  ];

  // 검색 결과 필터링
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // 자주 찾는 키워드
  const popularKeywords = [
    '비용', '안전', '긴급출동', '약품', '효과', '기간'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-blue-900 opacity-90" />
        <div className="max-w-[1140px] mx-auto px-6 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              자주 묻는 질문
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              고객님들이 자주 문의하시는 내용을 모았습니다.<br />
              궁금하신 내용을 검색해보세요.
            </p>
          </div>

          {/* 검색 바 */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="궁금하신 내용을 검색해보세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* 자주 찾는 키워드 */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {popularKeywords.map((keyword, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(keyword)}
                  className="px-4 py-1 bg-green-800 hover:bg-green-700 rounded-full text-sm transition-colors"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          {/* 카테고리 필터 */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
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

          {/* FAQ 목록 */}
          <div className="max-w-3xl mx-auto space-y-4">
            <AnimatePresence>
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-left">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        expandedQuestion === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedQuestion === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-gray-50">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">검색 결과가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              더 자세한 상담이 필요하신가요?
            </h2>
            <p className="text-gray-600">
              전문 상담사가 친절하게 답변해드리겠습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">전화 상담</h3>
              <p className="text-gray-600 mb-4">
                평일 09:00 - 18:00<br />
                010-5426-1889
              </p>
              <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                전화하기
              </button>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">이메일 문의</h3>
              <p className="text-gray-600 mb-4">
                24시간 접수 가능<br />
                lgg0708@naver.com
              </p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                메일 보내기
              </button>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">실시간 채팅</h3>
              <p className="text-gray-600 mb-4">
                평일 09:00 - 22:00<br />
                주말/공휴일 10:00 - 18:00
              </p>
              <button className="px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-colors">
                채팅 시작하기
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            추가 리소스
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '서비스 가이드',
                description: '전문 방역 서비스 상세 안내',
                buttonText: '가이드 다운로드',
                icon: FileText
              },
              {
                title: '시공 사례집',
                description: '다양한 시공 성공 사례',
                buttonText: '사례 보기',
                icon: Bug
              },
              {
                title: '안전 매뉴얼',
                description: '방역 관련 안전 수칙',
                buttonText: '매뉴얼 확인',
                icon: Shield
              },
              {
                title: '정기 관리 안내',
                description: '정기 관리 프로그램 소개',
                buttonText: '프로그램 안내',
                icon: Calendar
              }
            ].map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                    {resource.buttonText}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">방역 관리 가이드라인</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-semibold mb-4">예방 관리 수칙</h3>
                <div className="space-y-3">
                  {[
                    '정기적인 청소 및 위생 관리',
                    '음식물 처리 및 보관 관리',
                    '출입구 및 틈새 관리',
                    '습도 및 온도 관리'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">긴급 상황 대처 방법</h3>
                <div className="space-y-3">
                  {[
                    '긴급 전화 연락',
                    '현장 사진 전송',
                    '임시 조치 실시',
                    '전문가 방문 대기'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

