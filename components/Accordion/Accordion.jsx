import React, { useState } from 'react'

const Accordion = ({ title, content }) => {

  const [showContent, setShowContent] = useState(false)

  const handleShowContent = () => {
    setShowContent(!showContent)
  }

  return (
    <div className="accordion-item border-b border-gray-400" onClick={handleShowContent}>
      <div className="accordion-title cursor-pointer flex justify-between py-4 px-6 bg-white">
        <div>{title}</div>
        <svg className={`${showContent ? 'rotate-180' : ''} w-6 h-6 text-gray-400 transform transition-transform duration-300`} viewBox="0 0 24 24"        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className={`${showContent ? '' : 'hidden'} accordion-content pb-2 px-10 text-gray-700`}>
        {content}
      </div>
    </div>
  )
}

export default Accordion