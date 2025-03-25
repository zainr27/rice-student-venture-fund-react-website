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
    <header className="fixed top-0 z-50 w-full border-b backdrop-blur-sm" style={{ backgroundColor: '#005596' }}> 
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
          <span className="text-xl font-bold text-white font-['Libre_Baskerville']">
            Rice Student Venture Fund
          </span>
        </Link>
        <nav className="flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gray-300", // Changed hover:text-primary to hover:text-gray-300
                location.pathname === item.href
                  ? "text-white" // Changed text-primary to text-white
                  : "text-gray-300" // Changed text-muted-foreground to text-gray-300
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