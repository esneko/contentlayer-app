import Link from 'next/link'

export const Header = () => (
  <header className="p-6 border-b dark:border-gray-600">
    <Link href="/" className="transition-all duration-300 hover:opacity-75">
      <h1 className="text-2xl font-bold text-center">Visual Editing for Next.js</h1>
    </Link>
  </header>
)
