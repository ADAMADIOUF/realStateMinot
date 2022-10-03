import React,{useState} from 'react'
import ProductProjects from './ProductProjects'
import gallery from '../dataProjects'
import ProjectsCategories from './ProjectsCategories'
const allCategories = ['all', ...new Set(gallery.map((item) => item.category))]
const ProjectCategory = () => {
   const [menuItems, setMenuItems] = useState(gallery)
   const [categories, setCategories] = useState(allCategories)
   const filterItems = (category) => {
     if (category === 'all') {
       setMenuItems(gallery)
       return
     }
     const newItems = gallery.filter((item) => item.category === category)
     setMenuItems(newItems)
   }
  return (
    <main>
      <section className='menu section'>
        <ProjectsCategories categories={categories} filterItems={filterItems} />
        <ProductProjects product={menuItems} />
      </section>
    </main>
  )
}

export default ProjectCategory