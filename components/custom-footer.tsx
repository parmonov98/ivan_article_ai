import React from 'react'

const CustomFooter: React.FC = () => {
  return (
      <footer className="bg-black rounded-lg m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <a href="/" className="-m-1.5 p-1.5">
            <span className={"text-white"}>
              По всем вопросам обращайтесь на почту
            </span>
          </a>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
            <li>
              <a href="/offer" className="hover:underline me-4 md:me-6">Оферта</a>
            </li>
            <li>
              <a href="/policy" className="hover:underline me-4 md:me-6">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="/library" className="hover:underline me-4 md:me-6">Библиотека проектов</a>
            </li>
            {/*<li>*/}
            {/*  <a href="#" className="hover:underline">Contact</a>*/}
            {/*</li>*/}
          </ul>
        </div>
        <div className={"w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"}>
          <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />

          <span className="text-gray-500">(с) 2024, ООО «Компания».</span>
        </div>
      </footer>

  )
}

export default CustomFooter
