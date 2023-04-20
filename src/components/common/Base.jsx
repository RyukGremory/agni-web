import React from 'react'
import Sidenavbar from './Sidenavbar'
import Topnavbar from './topnavbar'
import Maincontainer from './MainContainer'

export default function Basepage (params) {
  return (
    <body class='g-sidenav-show  bg-gray-100'>
      <Sidenavbar />
      <main class='main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y'>
        <Topnavbar />
        <Maincontainer />
      </main>
    </body>
  )
}
