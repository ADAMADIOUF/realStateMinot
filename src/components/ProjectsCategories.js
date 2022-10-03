import React from 'react'

const ProjectsCategories = ({ categories, filterItems }) => {
  
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          
            <span
              className='filter-btn'
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </span>
         
        )
      })}
    </div>
  )
}

export default ProjectsCategories