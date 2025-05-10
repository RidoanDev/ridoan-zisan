<motion.div 
  initial={{ opacity: 0, y: 50, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: 20, scale: 0.95 }}
  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
  className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-white rounded-xl shadow-lg p-4 z-50 border border-gray-100"
>
  <div className="flex items-start">
    <div className="mr-3 flex-shrink-0">
      <div className="bg-indigo-100 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
    <div className="flex-1">
      <h4 className="text-gray-900 font-medium">{content[language].title}</h4>
      <p className="text-sm text-gray-600 mt-1">{content[language].description}</p>
    </div>
  </div>
  <div className="flex justify-end gap-3 mt-4">
    <button 
      onClick={dismissBanner}
      className={cn(
        "px-4 py-2 text-sm rounded-lg text-gray-600 hover:bg-gray-50 transition-colors border border-gray-200"
      )}
    >
      {content[language].dismissText}
    </button>
    <button 
      onClick={installApp}
      className={cn(
        "px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm"
      )}
    >
      {content[language].buttonText}
    </button>
  </div>
</motion.div>
