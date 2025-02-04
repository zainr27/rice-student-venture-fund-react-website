import { Instagram, Linkedin } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="container flex h-14 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © 2024 Rice Student Venture Fund. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open('https://www.linkedin.com/company/ricestudentventurefund/', '_blank')}
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open('https://www.instagram.com/ricestudentventurefund/', '_blank')}
          >
            <Instagram className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}