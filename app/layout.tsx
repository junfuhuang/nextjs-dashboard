import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
{/* 接收一个 children 属性，类型为 React.ReachNode，表示可以包含任何 React 元素或者组件 */}
{/* 该函数式组件的命名没有限制，可以随意命，只需要保证有 export default 即可 */}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 同时添加了 Tailwind 的 antialiased 类，该类可使字体更加平滑。使用这个类并不是必需的，但它会增添一些美感  */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
