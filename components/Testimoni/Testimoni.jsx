import React from 'react'

const Testimoni = ({ username, profesi, feedback, delay }) => {
  return (
    <div className="testimonial-card shadow-md rounded-md p-8" data-aos="fade-up" data-aos-delay={delay} >
      <p className="text-gray-700 mb-4">
        "{feedback}"
      </p>
      <div className="flex items-center">
        <div className="avatar bg-gray-300 rounded-full w-12 h-12" />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{username}</h3>
          <p className="text-gray-700 mb-0">{profesi}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimoni