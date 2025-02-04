import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Story', href: '/our-story' },
  { name: 'Meet the Team', href: '/meet-the-team' },
]

export function Header() {
  const location = useLocation()

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/BIRD.avif"
            alt="Rice Student Venture Fund Logo"
            className="h-10 w-auto"
            onError={(e) => {
              e.currentTarget.src = '/images/rice-shield-blue.png'
              e.currentTarget.onerror = null
            }}
          />
          <span className="text-xl font-bold text-primary">
            Rice Student Venture Fund
          </span>
        </Link>
        <nav className="flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}