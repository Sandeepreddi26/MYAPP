import React from 'react'
import NavbarLoggedIn from './NavbarLoggedIn'

export default function Header(props) {
  return (
    <div>
        <NavbarLoggedIn memberId={props.memberId}  />
    </div>
  )
}
