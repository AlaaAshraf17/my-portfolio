import React from 'react'

const TabButton = ({active,selectTab,children}) => {
    const buttonClasses = active 
        ? 'bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg shadow-green-400/25' 
        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-green-400 border border-gray-700/50'
  
  return (
   <button 
     onClick={selectTab}
     className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${buttonClasses}`}
   >
     {children}
   </button>
  )
}

export default TabButton
