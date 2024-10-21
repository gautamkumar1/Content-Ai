import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Social Media Content Creator AI. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.linkedin.com/in/gautamkum4r/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/gautamkumar1/Contentura-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Developed by
              <Link
                href="https://gautam-dev-xd.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Gautam
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}