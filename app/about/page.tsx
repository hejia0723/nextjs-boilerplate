export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            关于我
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI教育+心理学赋能双辅创始人，致力于将前沿AI技术与专业心理学知识相结合，
            为青少年和学习者提供更加个性化和有效的成长支持。
          </p>
        </div>
      </section>

      {/* Education & Background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">教育背景</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">教育心理学硕士</h3>
                  <p className="text-gray-600">
                    深入研究学习心理学、认知发展理论和教育技术，为AI教育应用奠定了坚实的理论基础。
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">计算机软件本科</h3>
                  <p className="text-gray-600">
                    系统学习软件开发、人工智能算法和数据分析，具备将技术与教育相结合的专业能力。
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">专业经历</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">大型国企技术经验</p>
                      <p className="text-gray-600 text-sm">参与多个大型技术项目，积累了丰富的系统开发和项目管理经验</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">10年未成年人心理健康辅导</p>
                      <p className="text-gray-600 text-sm">专注青少年心理发展，帮助数百名学生解决学习和成长中的心理问题</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">专业资质认证</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI破局俱乐部初创行动家</h3>
              <p className="text-gray-600 text-sm">致力于AI技术普及和应用创新</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">工信部AI智能体应用工程师</h3>
              <p className="text-gray-600 text-sm">国家认证的AI应用专业技术资格</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">工信部AIGC应用工程师（高级）</h3>
              <p className="text-gray-600 text-sm">AI生成内容领域高级专业认证</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI破局官方认证首批签约讲师</h3>
              <p className="text-gray-600 text-sm">专业AI教育培训资格认证</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">国家二级心理咨询师</h3>
              <p className="text-gray-600 text-sm">国家认证的专业心理咨询资格</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">公众号：雯的AI慧学空间</h3>
              <p className="text-gray-600 text-sm">分享AI学习资源和心理成长内容</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">使命与愿景</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              致力于成为AI教育与心理学结合领域的先行者，帮助更多人在数字化时代实现个人成长与发展。
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-white mb-6">我的使命</h3>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  普及AI技术知识，让更多人受益于人工智能的发展
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  结合心理学专业知识，为青少年提供科学的学习指导
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  推动AI教育与传统教育的深度融合
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  帮助学习者提升元认知能力和学习效率
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-white mb-6">我的愿景</h3>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  建立AI+心理学教育服务的行业标准
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  培养更多具备AI思维的未来人才
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  创造个性化、智能化的学习成长体验
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  成为连接技术与人文的桥梁
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}