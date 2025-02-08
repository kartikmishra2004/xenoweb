"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {

  const pathname = usePathname();

  return (
    <header className="sticky lg:block hidden px-4 top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span><Image className="invert" src='/logo.png' alt="My Image" width={20} height={20} /></span><span className="font-bold">XenoWeb</span>
        </Link>
        <nav className="flex flex-1 px-3 items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`transition-colors ${pathname === item.href ? 'text-primary' : 'text-muted-foreground'} hover:text-primary`}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/kartikmishra2004/xenoweb" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href='/contact'>
            <Button size="sm">Contact</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}