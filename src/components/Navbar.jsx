import React from 'react'

const navLinks = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Services", href: "#services", current: false },
  { name: "Rates", href: "#rates", current: false },
  { name: "Contact Us", href: "#contact", current: false },
  { name: "FAQ", href: "#faq", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [toggle, toggleNavbar] = React.useState(false);
  return (
    <div className='bg-[#6FA3D6] font-bold py-2 xl:px-12 sm:px-0'>
      <div className="container mx-auto flex p-3 flex-col lg:flex-row items-center">
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <a className="items-center text-gray-200 mb-4 md:mb-0">
          <span className="ml-2 text-xl cursor-pointer">Pawsabilities</span>
          </a>

          <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => toggleNavbar(!toggle)}
            >
              <i className='fas fa-bars'></i>
            </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (toggle ? "flex" : " hidden")
          }
          id='example-navbar-danger'
        >
          <nav className="flex flex-col lg:flex-row md:ml-auto md:mr-auto items-center text-base justify-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={classNames(
                  link.current
                    ? "text-gray-300 hover:text-[#F9C74F]"
                    : "text-gray-200 hover:text-[#F9C74F] hover:cursor-pointer",
                    "px-4 lg:px-10 py-2 flex items-center text-sm uppercase font-bold leading-snug"
                )}
                aria-current={link.current ? "page" : undefined}
              >
                {link.name}
              </a>
            ))}
            <button className="inline-flex items-center bg-gray-1100 border-0 py-1 px-2 focus:outline-none hover:bg-gray-300 hover:text-[#F8961E] rounded text-gray-200 mt-4 ml-4 md:mt-0">Button
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar