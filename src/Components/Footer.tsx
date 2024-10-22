import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              ContentTura AI
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
            <li>
              <a href="#" className="hover:text-white hover:underline me-4 md:me-6 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white hover:underline me-4 md:me-6 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white hover:underline me-4 md:me-6 transition-colors">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white hover:underline transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="block text-sm text-gray-400 sm:text-center">
            © 2024 <a href="https://flowbite.com/" className="hover:text-white hover:underline transition-colors">ContentTura AI™</a>. All Rights Reserved.
          </span>
         <Link href={"https://github.com/gautamkumar1"} target="_blank">
         <span className="block text-sm text-gray-400 sm:text-center mt-2 sm:mt-0">
            Created by - <span className="text-purple-400 hover:text-purple-300">Gautam Kumar</span>
          </span>
         </Link>
        </div>
      </div>
    </footer>
  )
}