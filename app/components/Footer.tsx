import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">雯的AI慧学空间</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              AI教育+心理学赋能双辅创始人，致力于将前沿AI技术与专业心理学知识相结合，
              为青少年和学习者提供更加个性化和有效的成长支持。
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                公众号：雯的AI慧学空间
              </div>
              <div className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                微信：jiayi7he08
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速导航</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  关于我
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  服务
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  联系
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">核心服务</h4>
            <ul className="space-y-2 text-gray-300">
              <li>AI学习资源获取</li>
              <li>元认知能力交流</li>
              <li>青少年学业赋能</li>
              <li>心理咨询服务</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 雯的AI慧学空间. 保留所有权利。
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">专业资质：</span>
              <span className="text-gray-400 text-sm">工信部AI智能体应用工程师</span>
              <span className="text-gray-400 text-sm">国家二级心理咨询师</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}