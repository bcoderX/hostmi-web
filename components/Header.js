import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme("dark");
    } else {
      document.documentElement.classList.remove('dark');
      setTheme("light");
    };
  }, [])

  function setDarkTheme() {
    document.documentElement.classList.add("dark");
    setTheme("dark");
    localStorage.theme = "dark";
  };

  function setLightTheme() {
    document.documentElement.classList.remove("dark");
    setTheme("light");
    localStorage.theme = "light";
  };

  function toggleTheme() {
    if (theme == 'dark')
      setLightTheme()
    else
      setDarkTheme()
  }

  return (
    <div className="fixed top-0 w-full sm:bg-opacity-50 z-30 clearNav dark:clearNavDark md:bg-opacity-90 transition duration-300 ease-in-out">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <Link
            href="/"
            className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >

            <h1 className="flex items-center text-4xl Avenir tracking-tighter text-red-900 md:text-4x1 lg:text-3xl">
              <Image
                className="inline mr-5"
                width={45}
                height={45}
                src="/images/logo.png"
              />
              HostMI
            </h1>
          </Link>
          <div className="flex items-center md:hidden">
            <button
              className="cursor-pointer dark:text-white text-neutral-800 leading-none px-1 py-1  md:hidden outline-none focus:outline-none "
              type="button"
              aria-label="button"
              onClick={toggleTheme}
            >
              {
                theme == "dark" ? <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline-block h-6 w-6 dark-icon">
                    <path
                      d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                  :
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="inline-block h-6 w-6 light-icon">
                  <path
                    fill-rule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clip-rule="evenodd" />
                </svg>
              }
            </button>
            <button
              className="cursor-pointer dark:text-white text-neutral-800 leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
              type="button"
              aria-label="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu "
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

          </div>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-grow justify-end flex-wrap items-center">

              <li className="mx-4 md:flex hidden text-black dark:text-white">
                <button onClick={toggleTheme} className="cursor-pointer dark:text-white text-neutral-800 leading-none px-3 py-1 outline-none focus:outline-none">
                  {
                    theme == "dark" ? <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline-block h-6 w-6 dark-icon">
                    <path
                      d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                      :
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="inline-block h-6 w-6 light-icon">
                      <path
                        fill-rule="evenodd"
                        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                        clip-rule="evenodd" />
                    </svg>
                  }
                </button>
              </li>
              <li>
                <a
                  className="inline-flex items-center px-4 py-2 mt-2 font-medium text-white transition duration-500 ease-in-out transform rounded-lg text-md md:mt-0 md:ml-4 bg-gray-900"
                  href="#register"
                >
                  <span className="justify-center">S&#39;inscrire pour le test</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
