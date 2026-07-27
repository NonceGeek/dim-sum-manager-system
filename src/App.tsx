import SubSystemCard from './components/SubSystemCard'

const subSystems = [
  {
    icon: '📥',
    title: '语料采集子系统',
    description: '多源数据采集与聚合，支持主动采集与被动采集，构建高质量语料库。',
    status: '开发中…',
    tags: [],
    href: '',
  },
  {
    icon: '🔍',
    title: '语料检索子系统',
    description: '智能语义多模态检索引擎，支持全文搜索、向量检索、条件过滤，快速定位目标语料数据。',
    status: 'v1.0',
    tags: [],
    href: 'https://search.aidimsum.com/',
  },
  {
    icon: '🗂️',
    title: '语料管理子系统',
    description: '全生命周期语料管理，涵盖版本控制、权限管理、分类归档，实现语料资产的精细化运营。',
    status: 'v1.0',
    tags: ['需要 admin key'],
    href: 'https://search.aidimsum.com/admin/corpus',
  },
  {
    icon: '🛒',
    title: '应用商店子系统',
    description: '语料应用与插件市场，提供丰富的数据服务与工具组件，构建开放共享的语料生态。',
    status: 'v1.0',
    tags: [],
    href: 'https://search.aidimsum.com/appStore',
  },
  {
    icon: '🏷️',
    title: '语料标注子系统',
    description: '高效的数据标注平台，支持文本分类、实体识别、关系抽取等多种标注任务，提升语料可用性。',
    status: '1.0',
    tags: ['需要权限'],
    href: 'https://labeling.app.aidimsum.com/',
    miniAppQr: '/review-mini-app.jpg',
  },
  {
    icon: '🔐',
    title: '语料确权子系统',
    description: '语料版权登记与溯源管理，基于区块链等技术保障语料数据的知识产权与合规使用。',
    status: '内测中…',
    tags: ['需要 admin key', '区块链'],
    href: 'https://rightproof.app.aidimsum.com',
  },
  {
    icon: '📊',
    title: '语料质量评估子系统',
    description: '多维度质量评估体系，自动化检测语料的完整性、一致性、准确性，持续优化语料品质。',
    status: '开发中…',
    tags: [],
    href: '',
  },
  {
    icon: '🤖',
    title: 'AI 对接子系统',
    description: '标准化 AI 模型接入层，无缝对接各种大模型和 AI Agents，并提供多种功能的模块，赋能下游智能应用。',
    status: '开发中…',
    tags: ['需要 API key'],
    href: 'https://search.aidimsum.com/docs',
  },
]

const generator = {
  icon: '🥟',
  title: 'Dim Sum 系统生成器',
  description: '一键生成定制化 DimSum 系统，灵活配置模块组合与部署方案，快速交付专属平台。',
  status: '开发中…',
  tags: [],
  href: 'https://wu.search.aidimsum.com/',
}

function isInDevelopment(status: string) {
  return status.startsWith('开发中')
}

function hasLink(item: { href?: string; miniAppQr?: string }) {
  return Boolean(item.href) || Boolean(item.miniAppQr)
}

const sortedSubSystems = [...subSystems].sort((a, b) => {
  const byStatus = Number(isInDevelopment(a.status)) - Number(isInDevelopment(b.status))
  if (byStatus !== 0) return byStatus
  return Number(hasLink(b)) - Number(hasLink(a))
})

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-md dark:border-gray-700/60 dark:bg-gray-900/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🥟</span>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Dim Sum Manager
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400 md:flex">
            <a href="#subsystems" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">子系统</a>
            <a href="#generator" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">生成器</a>
            <a href="#about" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">关于</a>
            <a href="https://github.com/noncegeek/dim-sum-manager" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">GitHub</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/20" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 text-center sm:py-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            语料管理一体化平台
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-100">
            Dim Sum Manager
            <span className="mt-2 block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
              语料管理系统
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            面向 AI 时代的一站式语料管理平台，覆盖语料采集、标注、确权、检索、质量评估、管理、AI 对接全链路，
            助力企业高效构建高质量语料资产。
            <br />
            目前显示的是 GUI 版本，CLI 版本在下一期规划中。
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#subsystems"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/40"
            >
              探索子系统
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-700"
            >
              了解更多
            </a>
          </div>
        </div>
      </section>

      <section id="subsystems" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            八大子系统
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            模块化设计，按需组合，覆盖语料管理全生命周期
          </p>
        </div>
        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sortedSubSystems.map((sys) => (
            <SubSystemCard key={sys.title} {...sys} />
          ))}
        </div>
      </section>

      <section id="generator" className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              系统生成器
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              一键生成专属语料管理平台
            </p>
          </div>
          <div className="mx-auto max-w-md">
            <SubSystemCard {...generator} />
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              关于 Dim Sum Manager
            </h2>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              访问 AI DimSum 官网：
              <a
                href="https://aidimsum.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                https://aidimsum.com
              </a>
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Dim Sum Manager 是一套面向 AI 时代的语料管理基础设施。平台采用模块化架构设计，
              包含八大核心子系统与一个系统生成器，各子系统既可独立运行，也可灵活组合，
              满足不同规模、不同场景的语料管理需求。
            </p>
            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">8+1</div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">子系统 + 生成器</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">全链路</div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">语料生命周期管理</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">模块化</div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">灵活按需组合</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>🥟</span>
            <span>© 2026 Dim Sum Manager System. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <a href="https://github.com/noncegeek" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">社区</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
