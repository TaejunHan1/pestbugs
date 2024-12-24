'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Shield, CheckCircle2,
  ChevronRight,
  Factory, Store, Building,
   Hospital, 
  Bug, MousePointer, Sparkles, Microscope,
  ClipboardCheck, Calendar, Award, ThumbsUp
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // 서비스 카테고리 데이터
  const serviceCategories = [
    { id: 'all', name: '전체 보기', icon: Shield },
    { id: 'pest', name: '해충 방제', icon: Bug },
    { id: 'rodent', name: '쥐 방제', icon: MousePointer },
    { id: 'sanitize', name: '살균 소독', icon: Sparkles },
    { id: 'inspection', name: '전문 점검', icon: Microscope }
  ];

  // 서비스 데이터
// 서비스 섹션의 이미지도 수정
const services = [
  {
    id: 1,
    category: 'pest',
    title: '일반 해충 방제',
    description: '바퀴벌레, 개미 등 일반 해충에 대한 전문적인 방제 서비스',
    features: [
      '첨단 약제 사용',
      '친환경 시공',
      '정기적 모니터링',
      '재발 방지 관리'
    ],
    targets: ['주거시설', '상업시설', '식품제조시설'],
    image: "/api/placeholder/500/300", // placeholder 이미지로 변경
    Icon: Bug // 아이콘 추가
  },
  {
    id: 2,
    category: 'rodent',
    title: '쥐 방제 서비스',
    description: '최신 장비와 전문 기술을 활용한 효과적인 쥐 방제',
    features: [
      '무독성 방제',
      '진입로 차단',
      '지속적 모니터링',
      '예방 관리'
    ],
    targets: ['창고', '식품공장', '주택'],
    image: "/api/placeholder/500/300", // placeholder 이미지로 변경
    Icon: MousePointer // 아이콘 추가
  },
  {
    id: 3,
    category: 'sanitize',
    title: '전문 살균 소독',
    description: '바이러스와 세균을 박멸하는 전문 살균 소독 서비스',
    features: [
      'WHO 승인 약제',
      '무인 분무 시스템',
      '잔류성 확보',
      '공간 전체 소독'
    ],
    targets: ['병원', '학교', '사무실'],
    image: "/api/placeholder/500/300", // placeholder 이미지로 변경
    Icon: Sparkles // 아이콘 추가
  }
];

  // FAQ 데이터
  const faqs = [
    {
      question: '서비스 비용은 어떻게 책정되나요?',
      answer: '시설의 규모, 방제 대상, 서비스 주기 등을 고려하여 맞춤형으로 견적을 산출해드립니다. 현장 방문 후 정확한 비용을 안내해드립니다.'
    },
    {
      question: '서비스 소요 시간은 얼마나 되나요?',
      answer: '일반적인 가정집 기준 2-3시간 정도 소요되며, 상업시설의 경우 규모에 따라 4-8시간 정도 소요됩니다. 시공 전 정확한 소요시간을 안내해드립니다.'
    },
    {
      question: '사용하는 약품은 안전한가요?',
      answer: '식약처 승인을 받은 안전한 약품만을 사용하며, WHO 기준에 부합하는 친환경 약제를 주로 사용합니다. 인체와 환경에 미치는 영향을 최소화하였습니다.'
    }
  ];

  // 시설별 맞춤 서비스 데이터
  const facilityServices = [
    {
      icon: Factory,
      facility: '제조시설',
      services: ['HACCP 기준 방제', '해충 모니터링', '위생 관리']
    },
    {
      icon: Store,
      facility: '상업시설',
      services: ['긴급 방제', '정기 소독', '해충 방지']
    },
    {
      icon: Building,
      facility: '오피스',
      services: ['건물 위생 관리', '예방 소독', '유지 관리']
    },
    {
      icon: Hospital,
      facility: '의료시설',
      services: ['멸균 소독', '감염 예방', '특수 방역']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-blue-900 opacity-90" />
        <div className="max-w-[1140px] mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              전문적인 방역 서비스로<br />
              <span className="text-green-400">깨끗한 환경</span>을 만듭니다
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              25년 현장 경험을 바탕으로 한 체계적이고 과학적인 접근으로
              최적의 방제 솔루션을 제공합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-green-500 rounded-full font-medium hover:bg-green-600 transition-colors"
              >
                무료 상담 신청
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-green-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                서비스 가이드 다운로드
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-3 rounded-full inline-flex items-center transition-all ${
                    activeTab === category.id
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

       {/* Service Cards */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services
    .filter(service => activeTab === 'all' || service.category === activeTab)
    .map((service) => (
      <motion.div
        key={service.id}
        whileHover={{ y: -8 }}
        className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all"
      >
        {/* Image 부분을 아이콘으로 변경 */}
        <div className="relative h-48 bg-gray-100 flex items-center justify-center rounded-t-xl">
          <service.Icon className="w-24 h-24 text-gray-400" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">주요 특징</h4>
              <div className="grid grid-cols-2 gap-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">적용 시설</h4>
              <div className="flex flex-wrap gap-2">
                {service.targets.map((target, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {target}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                상세 견적 문의
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
</div>
        </div>
      </section>

      {/* Facility-specific Services */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">시설별 맞춤 서비스</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilityServices.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.facility}</h3>
                  <ul className="space-y-2">
                    {item.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">서비스 진행 과정</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: ClipboardCheck,
                title: '현장 조사',
                description: '전문가 현장 방문 및 상태 점검'
              },
              {
                icon: Microscope,
                title: '분석 및 계획',
                description: '맞춤형 방제 계획 수립'
              },
              {
                icon: Sparkles,
                title: '서비스 시행',
                description: '전문 장비/약품을 통한 시공'
              },
              {
                icon: Calendar,
                title: '사후 관리',
                description: '정기적인 모니터링 및 관리'
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-green-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">서비스 혜택</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: '전문성',
                description: '25년 이상의 현장 경험을 보유한 전문가들이 서비스를 제공합니다.'
              },
              {
                icon: Shield,
                title: '안전성',
                description: '친환경 약품 사용으로 인체와 환경에 안전한 방제를 실현합니다.'
              },
              {
                icon: ThumbsUp,
                title: '효과',
                description: '과학적인 접근과 체계적인 관리로 높은 방제 효과를 보장합니다.'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">자주 묻는 질문</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={false}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-left">{faq.question}</span>
                  <ChevronRight 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedFaq === index ? 'transform rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            전문가의 솔루션이 필요하신가요?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            무료 상담을 통해 최적의 방제 솔루션을 제안해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-green-600 rounded-full shadow-lg hover:shadow-xl transition-all font-medium"
            >
              무료 상담 신청
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all font-medium"
            >
              서비스 견적 문의
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}

