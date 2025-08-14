import '@/app/ui/global.css';
{/* 接收一个 children 属性，类型为 React.ReachNode，表示可以包含任何 React 元素或者组件 */}
{/* 该函数式组件的命名没有限制，可以随意命，只需要保证有 export default 即可 */}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
