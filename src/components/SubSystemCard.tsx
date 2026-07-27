import { useEffect, useState } from 'react'

interface SubSystemCardProps {
  icon: string
  title: string
  description: string
  status: string
  tags: string[]
  href?: string
  miniAppQr?: string
}

const statusStyles: Record<string, string> = {
  '开发中': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  '开发中…': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  '1.0': 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  'v1.0': 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  'v2.0': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  '规划中': 'bg-gray-100 text-gray-600 dark:bg-gray-700/40 dark:text-gray-300',
}

export default function SubSystemCard({
  icon,
  title,
  description,
  status,
  tags,
  href,
  miniAppQr,
}: SubSystemCardProps) {
  const [qrOpen, setQrOpen] = useState(false)
  const hasWeb = Boolean(href)
  const hasMiniApp = Boolean(miniAppQr)

  useEffect(() => {
    if (!qrOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setQrOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [qrOpen])

  const card = (
    <div className="group relative flex h-full flex-col items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-500">
      <div className="flex w-full items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl shadow-md">
          {icon}
        </div>
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status] ?? statusStyles['规划中']}`}>
          {status}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{description}</p>
      <div className="mt-auto flex min-h-6 w-full flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-600 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
            {tag}
          </span>
        ))}
      </div>
      {hasMiniApp ? (
        <div className="flex w-full flex-wrap gap-2">
          {hasWeb && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-indigo-700"
            >
              网页版
            </a>
          )}
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 transition-colors hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300 dark:hover:bg-indigo-900/50"
            onClick={() => setQrOpen(true)}
          >
            小程序版
          </button>
        </div>
      ) : hasWeb ? (
        <div className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
          <span>进入</span>
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      ) : (
        <div className="h-5" />
      )}
    </div>
  )

  return (
    <>
      {hasWeb && !hasMiniApp ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
          {card}
        </a>
      ) : (
        <div className="h-full">{card}</div>
      )}

      {qrOpen && miniAppQr && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setQrOpen(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${title}小程序二维码`}
          >
            <button
              type="button"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              onClick={() => setQrOpen(false)}
              aria-label="关闭"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center gap-4 pt-2">
              <h4 className="pr-8 text-base font-semibold text-gray-900 dark:text-gray-100">{title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">微信扫码打开小程序</p>
              <img
                src={miniAppQr}
                alt={`${title}小程序二维码`}
                className="h-56 w-56 rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
