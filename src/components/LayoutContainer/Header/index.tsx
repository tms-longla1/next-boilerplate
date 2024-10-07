import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-3 bg-banner">
      <div className="max-w-7xl flex mx-auto px-4">
        <nav className="flex items-end">
          <Link href="/">
            <Image src="/images/logo.png" alt="" className="h-5 lg:h-7" width="200" height="200" />
          </Link>
        </nav>
        {/* <select
          className="text-sm ml-auto"
          defaultValue={}
          onChange={(e) => {}}
        >
          <option value="vi">Tiếng Việt</option>
          <option value="en">English</option>
        </select> */}
      </div>
    </header>
  )
}
