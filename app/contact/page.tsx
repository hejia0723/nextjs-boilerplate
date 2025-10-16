'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    alert('感谢您的留言！我会尽快回复您。');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            联系我
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            欢迎通过以下方式联系我，获取AI学习资源或预约心理咨询服务
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">联系方式</h2>

              {/* WeChat */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.5 12.5c0-.5-.4-1-1-1s-1 .5-1 1 .4 1 1 1 1-.5 1-1zm7 0c0-.5-.4-1-1-1s-1 .5-1 1 .4 1 1 1 1-.5 1-1z"/>
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-3.5 13.5c-.3 0-.6-.1-.8-.3l-2.2-2.2c-.4-.4-.4-1.1 0-1.5s1.1-.4 1.5 0l1.4 1.4 3.4-3.4c.4-.4 1.1-.4 1.5 0s.4 1.1 0 1.5l-4.2 4.2c-.2.2-.5.3-.8.3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">微信联系</h3>
                    <p className="text-gray-600">个人咨询和服务预约</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-mono font-semibold text-blue-600">jiayi7he08</p>
                  <p className="text-sm text-gray-600 mt-2">添加微信时请备注"AI慧学咨询"</p>
                </div>
              </div>

              {/* WeChat Official Account */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">公众号</h3>
                    <p className="text-gray-600">获取AI学习资源和心理成长内容</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-semibold text-blue-600">雯的AI慧学空间</p>
                  <p className="text-sm text-gray-600 mt-2">每周更新AI学习资源和心理健康知识</p>
                </div>
              </div>

              {/* Service Hours */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">服务时间</h3>
                    <p className="text-gray-600">咨询和服务时间安排</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">周一至周五：</span>9:00 - 18:00</p>
                  <p><span className="font-semibold">周末：</span>10:00 - 16:00</p>
                  <p><span className="font-semibold">心理咨询：</span>需要预约</p>
                  <p className="text-sm text-gray-600 mt-3">
                    * 紧急情况可通过微信联系，我会尽快回复
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">在线留言</h2>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请输入您的姓名"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请输入您的邮箱"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      咨询类型 *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">请选择咨询类型</option>
                      <option value="ai-learning">AI学习资源获取</option>
                      <option value="metacognitive">元认知能力交流</option>
                      <option value="academic">青少年学业赋能</option>
                      <option value="psychological">心理咨询服务</option>
                      <option value="cooperation">合作洽谈</option>
                      <option value="other">其他</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      详细描述 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请详细描述您的需求或问题..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    发送留言
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">常见问题</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">如何开始AI学习？</h3>
              <p className="text-gray-600">
                建议先关注我的公众号"雯的AI慧学空间"，获取入门资源。然后可以通过微信联系我，
                根据您的基础和目标制定个性化学习计划。
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">心理咨询如何预约？</h3>
              <p className="text-gray-600">
                请通过微信(jiayi7he08)联系我预约心理咨询时间。首次咨询会进行基础评估，
                了解您的具体需求，然后安排后续咨询计划。
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">服务费用如何收取？</h3>
              <p className="text-gray-600">
                不同服务有不同的收费标准，具体费用会根据服务内容和时长确定。
                请联系我获取详细的价格信息和优惠方案。
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">是否提供在线服务？</h3>
              <p className="text-gray-600">
                是的，我提供线上和线下两种服务方式。线上服务通过视频通话进行，
                方便各地的学习者和咨询者。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}