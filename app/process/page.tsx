'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  PhoneCall, ClipboardCheck, Search, Calendar,
  Sparkles, Microscope, LineChart, CheckCircle2,
  AlertTriangle, Clock, Shield, Users,
  BellRing, FileSpreadsheet, PenTool, BookOpen,
  Bug, MousePointer, Zap, Activity
} from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  // 프로세스 단계 데이터
  const processSteps = [
    {
      step: 1,
      title: '상담 신청',
      description: '전화 또는 온라인으로 상담을 신청합니다.',
      details: {
        duration: '10-15분',
        method: '전화/온라인',
        output: '기본 정보 확인'
      },
      icon: PhoneCall,
      checkpoints: [
        '현장 기본 정보 확인',
        '주요 문제점 파악',
        '방문 일정 조율'
      ]
    },
    {
      step: 2,
      title: '현장 조사',
      description: '전문가가 직접 현장을 방문하여 상태를 조사합니다.',
      details: {
        duration: '1-2시간',
        method: '방문 실사',
        output: '현장 조사 보고서'
      },
      icon: Search,
      checkpoints: [
        '해충 발생 현황 조사',
        '취약 지점 점검',
        '주변 환경 분석'
      ]
    },
    {
      step: 3,
      title: '분석 및 계획',
      description: '조사 결과를 바탕으로 최적의 방제 계획을 수립합니다.',
      details: {
        duration: '1-2일',
        method: '전문가 분석',
        output: '방제 계획서'
      },
      icon: Microscope,
      checkpoints: [
        '데이터 분석',
        '방제 방법 선정',
        '세부 계획 수립'
      ]
    },
    {
      step: 4,
      title: '견적 제안',
      description: '수립된 계획을 바탕으로 맞춤형 견적을 제안합니다.',
      details: {
        duration: '1일',
        method: '서면/대면',
        output: '견적서'
      },
      icon: FileSpreadsheet,
      checkpoints: [
        '비용 산정',
        '서비스 범위 확정',
        '계약 조건 협의'
      ]
    },
    {
      step: 5,
      title: '방제 시공',
      description: '전문 장비와 약품을 사용하여 방제를 실시합니다.',
      details: {
        duration: '2-4시간',
        method: '현장 시공',
        output: '시공 확인서'
      },
      icon: Sparkles,
      checkpoints: [
        '안전 조치',
        '전문 시공',
        '완료 확인'
      ]
    },
    {
      step: 6,
      title: '사후 관리',
      description: '정기적인 모니터링과 관리를 진행합니다.',
      details: {
        duration: '계약기간',
        method: '정기 점검',
        output: '관리 보고서'
      },
      icon: Activity,
      checkpoints: [
        '효과 모니터링',
        '예방 관리',
        '개선사항 피드백'
      ]
    }
  ];

  // 품질 관리 포인트 데이터
  const qualityPoints = [
    {
      icon: Shield,
      title: '전문성',
      description: '25년 이상의 현장 경험을 보유한 전문가들이 모든 과정을 관리합니다.'
    },
    {
      icon: Users,
      title: '맞춤화',
      description: '각 현장의 특성을 고려한 맞춤형 방제 계획을 수립합니다.'
    },
    {
      icon: Clock,
      title: '신속성',
      description: '24시간 내 현장 방문, 48시간 내 계획 수립을 목표로 합니다.'
    },
    {
      icon: LineChart,
      title: '효과성',
      description: '과학적인 분석을 통해 최적의 방제 효과를 도출합니다.'
    }
  ];

  // 시설별 특화 프로세스
  const specializedProcesses = [
    {
      facility: '식품제조시설',
      icon: Bug,
      points: [
        'HACCP 기준 준수',
        '식품 안전성 고려',
        '위생 관리 체계 구축'
      ]
    },
    {
      facility: '상업시설',
      icon: MousePointer,
      points: [
        '영업 시간 고려',
        '고객 불편 최소화',
        '긴급 대응 체계'
      ]
    },
    {
      facility: '의료시설',
      icon: Zap,
      points: [
        '멸균 관리',
        '감염 예방',
        '24시간 모니터링'
      ]
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
              체계적이고 전문적인<br />
              <span className="text-green-400">방제 프로세스</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              과학적인 분석과 체계적인 프로세스를 통해
              최상의 방제 효과를 제공합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">서비스 진행 단계</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Process Visualization */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  {processSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.step}
                        className={`flex items-start mb-8 ${
                          activeStep === step.step ? 'opacity-100' : 'opacity-50'
                        }`}
                        onClick={() => setActiveStep(step.step)}
                      >
                        <div 
                          className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                            activeStep === step.step ? 'bg-green-500 text-white' : 'bg-gray-100'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{step.title}</h3>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step Details */}
            <div>
              {processSteps.map((step) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeStep === step.step ? 1 : 0,
                    y: activeStep === step.step ? 0 : 20 
                  }}
                  className={`bg-white rounded-xl shadow-lg p-8 mb-8 ${
                    activeStep === step.step ? 'block' : 'hidden'
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-4">
                      STEP {step.step}: {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">소요 시간</p>
                      <p className="font-semibold">{step.details.duration}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">진행 방식</p>
                      <p className="font-semibold">{step.details.method}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">산출물</p>
                      <p className="font-semibold">{step.details.output}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">주요 체크포인트</h4>
                    <div className="space-y-3">
                      {step.checkpoints.map((checkpoint, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                          <span>{checkpoint}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Points */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">품질 관리 포인트</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-green-800 rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-green-100">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Processes */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">시설별 특화 프로세스</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {specializedProcesses.map((process, index) => {
              const Icon = process.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{process.facility}</h3>
                  <div className="space-y-3">
                    {process.points.map((point, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-[1140px] mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            전문적인 방제 서비스가 필요하신가요?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            체계적인 프로세스를 통해 최적의 방제 솔루션을 제공해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-green-600 rounded-full shadow-lg hover:shadow-xl transition-all font-medium inline-flex items-center justify-center"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              무료 상담 신청
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all font-medium inline-flex items-center justify-center"
            >
              <FileSpreadsheet className="w-5 h-5 mr-2" />
              상세 가이드 다운로드
            </motion.button>
          </div>
        </div>
      </section>

      {/* Process Guidelines */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">작업 진행 시 유의사항</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">안전 수칙 준수</h4>
                      <p className="text-gray-600 text-sm">작업 전 안전 교육 실시 및 보호장비 착용을 철저히 확인합니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BellRing className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">사전 고지</h4>
                      <p className="text-gray-600 text-sm">작업 시작 최소 24시간 전 관련 인원에게 사전 고지를 실시합니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BookOpen className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">매뉴얼 준수</h4>
                      <p className="text-gray-600 text-sm">표준 작업 절차와 안전 매뉴얼을 철저히 준수합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">품질 보증</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">만족도 보증</h4>
                      <p className="text-gray-600 text-sm">작업 완료 후 30일 이내 무상 재시공을 보장합니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Activity className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">효과 모니터링</h4>
                      <p className="text-gray-600 text-sm">정기적인 모니터링을 통해 방제 효과를 지속적으로 관리합니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">전문가 지원</h4>
                      <p className="text-gray-600 text-sm">전문 기술팀의 지속적인 기술 지원을 제공합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

