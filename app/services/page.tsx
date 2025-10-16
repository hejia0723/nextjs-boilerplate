import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            专业服务
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            融合AI技术与心理学专业知识，为您提供个性化的学习成长解决方案
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* AI Learning Resources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI学习资源获取</h3>
              <p className="text-gray-600 mb-6">
                提供最新最全的AI学习资源，包括课程推荐、工具介绍、实战项目等，
                帮助您快速掌握人工智能技术。
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  AI基础理论与实践课程
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  最新AI工具与平台推荐
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  行业案例分析与实战项目
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  个性化学习路径规划
                </li>
              </ul>
              <div className="text-blue-600 font-semibold">
                适合：AI初学者、技术爱好者、职场人员
              </div>
            </div>

            {/* Metacognitive Training */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">元认知能力交流</h3>
              <p className="text-gray-600 mb-6">
                通过科学的认知训练方法，提升学习思维能力、问题解决能力和自我反思能力，
                让学习变得更加高效。
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  学习策略优化指导
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  思维模式分析与改善
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  注意力训练与专注力提升
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  记忆技巧与知识管理
                </li>
              </ul>
              <div className="text-green-600 font-semibold">
                适合：学生、终身学习者、知识工作者
              </div>
            </div>

            {/* Youth Academic Support */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">青少年学业赋能</h3>
              <p className="text-gray-600 mb-6">
                结合教育心理学专业知识，为青少年提供科学的学科指导和学习能力提升方案，
                助力学业成功。
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  个性化学习计划制定
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  学科难点突破指导
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  学习动机激发与维持
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  考试技巧与心理调适
                </li>
              </ul>
              <div className="text-purple-600 font-semibold">
                适合：中小学生、高中生、大学生
              </div>
            </div>

            {/* Psychological Consultation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">心理咨询服务</h3>
              <p className="text-gray-600 mb-6">
                作为国家二级心理咨询师，提供专业的心理健康支持，
                特别关注青少年心理发展和学习压力管理。
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                  学习压力与焦虑管理
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                  青少年成长发展咨询
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                  亲子关系改善指导
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                  情绪调节与心理健康维护
                </li>
              </ul>
              <div className="text-pink-600 font-semibold">
                适合：青少年、家长、需要心理支持的个人
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">服务流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">初步咨询</h3>
              <p className="text-gray-600 text-sm">了解您的需求和目标，制定初步方案</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">评估分析</h3>
              <p className="text-gray-600 text-sm">专业评估当前状况，找出关键问题</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">方案实施</h3>
              <p className="text-gray-600 text-sm">执行个性化解决方案，提供持续指导</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">效果跟踪</h3>
              <p className="text-gray-600 text-sm">定期评估效果，调整优化方案</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">服务套餐</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">基础套餐</h3>
              <div className="text-3xl font-bold text-blue-600 mb-6">咨询详询</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  AI学习资源推荐
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  基础学习指导
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  微信群答疑
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                选择套餐
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                推荐
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">专业套餐</h3>
              <div className="text-3xl font-bold text-blue-600 mb-6">咨询详询</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  一对一个性化指导
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  学习计划制定
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  心理咨询服务
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  定期效果评估
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                选择套餐
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">高级套餐</h3>
              <div className="text-3xl font-bold text-blue-600 mb-6">咨询详询</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  VIP专属服务
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  24小时咨询支持
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  家庭教育指导
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  长期跟踪服务
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                选择套餐
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            开始您的学习成长之旅
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            联系我获取详细的服务方案和定制化建议
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            立即咨询
          </Link>
        </div>
      </section>
    </div>
  );
}