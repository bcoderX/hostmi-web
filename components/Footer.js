export default function Footer() {
  
  return (
    <footer className="pb-4 dark:bg-neutral-950 dark:text-gray-200 text-black">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top dark:border-gray-200 border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:justify-center sm:items-center sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="#"
                className="text-md transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Conditions d&#39;utilisation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-md transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Données et sécurité
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-md transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Partenaires
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="#"
              className="text-md transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2023 Host<span className="text-red-900">MI</span> SARL.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
