import React from 'react'
import { useGlobalContext } from '../context'
const Pages = () => {
   const { closeSubmenu } = useGlobalContext()
  return <div onMouseOver={closeSubmenu}>Pages</div>
}

export default Pages