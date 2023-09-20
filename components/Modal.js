export default function Modal({onDismiss}){
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
    {/* Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0" */}
  
  <div className="fixed inset-0 bg-gray-500 dark:bg-neutral-500 bg-opacity-75 dark:bg-opacity-30 transition-opacity"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      
        {/* Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
       */}
      <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-neutral-950 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 p-3 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-500 sm:mx-0 sm:h-10 sm:w-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" class="oc se axy"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-200" id="modal-title">Enregistrement réussi</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">Merci d&#39;avoir rempli le formulaire. Nous vous contaterons dès que possible.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-neutral-900 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={onDismiss} type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Fermer</button>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}