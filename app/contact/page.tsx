'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, Clock, MapPin,
  MessageSquare, CheckCircle2, AlertTriangle,
  Car, Building, Users, FileText, Send,
  ChevronRight,
  Home
} from 'lucide-react';

export default function Contact() {
  // 상담 폼 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    address: '',
    serviceType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // 서비스 타입 옵션
  const serviceTypes = [
    '일반 해충 방제',
    '쥐 방제',
    '위생 관리',
    '정기 관리',
    '긴급 출동',
    '기타 문의'
  ];

  // 영업 시간 정보
  const businessHours = [
    {
      day: '평일',
      hours: '09:00 - 18:00',
      note: '점심시간 12:00-13:00'
    },
    {
      day: '토요일',
      hours: '09:00 - 13:00',
      note: '격주 운영'
    },
    {
      day: '공휴일',
      hours: '휴무',
      note: '긴급출동 가능'
    }
  ];

  // 연락처 정보
  const contactInfo = [
    {
      icon: Phone,
      title: '전화 문의',
      content: '010-5426-1889',
      description: '평일 09:00-18:00'
    },
    {
      icon: Mail,
      title: '이메일',
      content: 'lgg0708@naver.com',
      description: '24시간 접수 가능'
    },
    {
      icon: MessageSquare,
      title: '카카오톡',
      content: '@pestking',
      description: '실시간 상담'
    },
    {
      icon: Car,
      title: '긴급출동',
      content: '010-5426-1889',
      description: '24시간 응대'
    }
  ];

  // 폼 제출 처리
  const handleSubmit = (e : any) => {
    e.preventDefault();
    // 여기에 폼 제출 로직 구현
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        address: '',
        serviceType: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-blue-900 opacity-90" />
        <div className="max-w-[1140px] mx-auto px-6 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              상담 문의
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              전문 상담사가 친절하게 답변해드리겠습니다.<br />
              무료 상담 및 견적을 요청해보세요.
            </p>
          </div>

          {/* 퀵 컨택트 카드 */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white text-gray-900 rounded-xl p-6 shadow-lg"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-lg font-medium text-green-600 mb-1">{info.content}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">상담 신청</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">이름 *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">연락처 *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">이메일</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">회사/상호명</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">주소</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">서비스 종류 *</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      <option value="">서비스를 선택해주세요</option>
                      {serviceTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">문의내용 *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    상담 신청하기
                  </motion.button>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-100 text-green-700 px-4 py-3 rounded-lg flex items-center"
                    >
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Location Info */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">오시는 길</h2>
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  {/* 지도 이미지 대체 */}
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">주소</h3>
                      <p className="text-gray-600">서울특별시 강남구 테헤란로 123 방역빌딩 8층</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Car className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">주차</h3>
                      <p className="text-gray-600">건물 내 지하주차장 이용 가능</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">영업 시간</h2>
                <div className="space-y-4">
                  {businessHours.map((time, index) => (
                    <div key={index} className="flex items-start">
                      <Clock className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">{time.day}</h3>
                        <p className="text-gray-600">{time.hours}</p>
                        <p className="text-sm text-gray-500">{time.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">자주 묻는 질문</h2>
            <p className="text-gray-600">가장 많이 문의하시는 내용을 모았습니다.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "상담은 무료인가요?",
                a: "네, 모든 상담은 무료로 진행됩니다. 전화, 이메일, 방문 상담 모두 무료입니다."
              },
              {
                q: "방문 상담도 가능한가요?",
                a: "네, 전문가가 직접 방문하여 현장 조사 후 맞춤 견적을 제안해드립니다."
              },
              {
                q: "긴급 출동 서비스는 어떻게 신청하나요?",
                a: "010-5426-1889 긴급출동 전용번호로 연락주시면 24시간 신속하게 출동해드립니다."
              },
              {
                q: "견적은 어떻게 받을 수 있나요?",
                a: "현장 방문 후 상태 점검을 진행하여 맞춤형 견적을 제공해드립니다. 온라인으로 상담 신청을 해주시면 빠르게 연락드리겠습니다."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 font-medium">Q</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">{item.q}</h3>
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors inline-flex items-center"
            >
              더 많은 FAQ 보기
              <ChevronRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">서비스 지역</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                region: '서울',
                areas: ['강남구', '서초구', '송파구', '강동구', '등 전체'],
                icon: Building
              },
              {
                region: '경기',
                areas: ['성남시', '용인시', '수원시', '안양시', '등 전체'],
                icon: Home
              },
              {
                region: '인천',
                areas: ['남동구', '연수구', '부평구', '계양구', '등 전체'],
                icon: Building
              },
              {
                region: '기타 지역',
                areas: ['대전', '대구', '부산', '광주', '등 협의'],
                icon: MapPin
              }
            ].map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{area.region}</h3>
                  <ul className="space-y-2">
                    {area.areas.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">뉴스레터 구독</h2>
            <p className="text-green-100 mb-8">
              방역 관련 최신 소식과 관리 팁을 받아보세요
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-green-800 text-white rounded-full hover:bg-green-700 transition-colors"
              >
                구독하기
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

