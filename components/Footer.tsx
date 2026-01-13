import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} myCare. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="/(public)/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="/(public)/compliance" className="hover:text-primary transition-colors">Compliance</Link>
        </div>
      </div>
    </footer>
  )
}
