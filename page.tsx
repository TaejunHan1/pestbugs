export default function Home() {
  return (
    <section className="py-10">
      <div className="bg-white rounded-card shadow-soft p-8 text-center">
        <h1 className="text-2xl font-bold mb-4 text-primary">
          해충방제 회사에 오신 것을 환영합니다
        </h1>
        <p className="mb-6 text-gray-600 leading-relaxed">
          저희는 안전하고 효과적인 해충방제 솔루션을 제공하는 전문 업체입니다.
          고객님의 소중한 공간을 지키기 위해 최선을 다하겠습니다.
        </p>
        <button className="bg-primary text-white px-6 py-2 rounded-full shadow
                           hover:bg-blue-600 transition-colors">
          자세히 알아보기
        </button>
      </div>
    </section>
  )
}
