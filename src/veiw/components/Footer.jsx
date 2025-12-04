import React from 'react'
import Linksmapper from './Linksmapper'
import data from '../../model/data/nav.json'
import datafooter from '../../model/data/datafooter.json'
import Logo from './Logo'
const Footer = () => {
  return (
    <footer >
        <div className='container'>

        <Logo position={"header logo"}></Logo>
      <ul>
        <Linksmapper data={data} depth={1}></Linksmapper>
      </ul>
      <ul>
        <Linksmapper data={datafooter} depth={1}></Linksmapper>
      </ul>
        </div>
    </footer>
  )
}

export default Footer
