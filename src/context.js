import React,{useState,createContext,useContext} from "react";
import dataMenu from "./dataMenu"
const AppContext = createContext()
const AppProvider = ({children}) =>{
   const [indexSlide, setIndexSlide] = useState(0)
   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
   const[isSidebarNavOpen,setIsSidebarNavOpen]= useState(false)
   const openSidebarNav = () => {
     setIsSidebarNavOpen(true)
   }
   const closeSidebarNav = () => {
     setIsSidebarNavOpen(false)
   }

    const openSidebar = () => {
      setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
      setIsSidebarOpen(false)
    }
    const [page, setPage] = useState({ page: '', links: [] })
    const [location, setLocation] = useState({})
    const openSubmenu = (text, coordinates) => {
      const page = dataMenu.find((link) => link.page === text)
      setPage(page)
      setLocation(coordinates)
      setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
      setIsSubmenuOpen(false)
    }
    const [slide, setSlide] = useState([
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        name: 'boubou africain,couple',
        title:
          "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
      },
      {
        id: 2,
        image:
          'https://wificonnectedappliance.com/wp-content/uploads/2021/12/Commercial-Real-Estate-Data-Room.jpg',
        name: 'boubou africain,couple',
        title:
          "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
      },
      {
        id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7YsaZ8bxYv2anFRr4mhij6jDN_ZNSwBpnjvH5ZoK4zO-m8kDCQuGampqzFZA-71sgFo&usqp=CAU',
        name: 'boubou africain,couple',
        title:
          "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
      },
      {
        id: 4,
        image:
          'https://wificonnectedappliance.com/wp-content/uploads/2021/12/Commercial-Real-Estate-Data-Room.jpg',
        name: 'boubou africain,couple',
        title:
          "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
      },
    ])
 return (
   <AppContext.Provider
     value={{
       isSidebarOpen,
       openSidebar,
       closeSidebar,
       isSubmenuOpen,
       openSubmenu,
       closeSubmenu,
       page,
       location,
       openSidebarNav,
       closeSidebarNav,
       setIsSidebarNavOpen,
       isSidebarNavOpen,
       slide,
       setSlide,
       indexSlide,
       setIndexSlide
       
     }}
   >
     {children}
   </AppContext.Provider>
 )
 }
 export const useGlobalContext = () => {
   return useContext(AppContext)
 }
 export { AppContext, AppProvider }