import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    // flex, flex-col：设置为弹性盒子，垂直排列
    // h-full：高度铺满父容器
    // px-3 py-4：内边距
    // md:px-2：Medium（桌面）响应式下左右内边距缩小
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* 头部Logo，点击返回首页（"/"）*/}
      {/* 与下方间隔，高度20（小屏），40（中屏及以上），蓝底，圆角，居左，底部对齐Logo */}
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      {/* 主体部分 —— NavLinks、留白分割、Sign Out */}
      {/* grow：让子内容填满剩余空间 */}
      {/* 小屏导航水平排列并均匀分布，桌面端为垂直排列且有垂直间隔 */}
      {/* 子元素之间水平方向有 0.5rem 的间距 */}
      {/* md及以上断点，去除水平方向的间距 */}
      {/* md及以上断点，子元素在垂直方向有 0.5rem 间隔 */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* 仅应用于中等及更高屏幕（md:block)，目的是在侧边栏底部“撑”出一个分割背景，实现空间感，以及将“Sign Out”按钮推到底部*/}
        {/* 该元素在默认情况下是不可见的（display: none），高度根据内容自动适应，宽度占满父元素100%（width: 100%），在弹性盒（flex）布局下，该元素可采用剩余可用空间生长（扩张），*/}
        {/* 中屏/桌面端（md及以上）**时，这个 div 会显示，占满宽度、自动高度、拥有圆角和浅灰色背景，并在父flex布局下填充剩余空间，这种写法常用于侧边栏，把内容底部“撑开”，让底部按钮（如退出登录）可以始终贴底显示 */}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
