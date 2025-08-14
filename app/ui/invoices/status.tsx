import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
{/* clsx：一个用于条件拼接 CSS 类名的小工具库，便于根据状态动态切换样式 */}
import clsx from 'clsx';

{/* 接收 status 属性（字符串类型，比如 'pending', 'paid'）的组件 */}
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
