import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import {AppBar, FlatButton, Paper} from 'material-ui'

const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const AppbarButtons = ({to, label}) => <Link to={to} activeClassName='route--active'><FlatButton primary label={label}/></Link>

const appBarButtons = [
  { to: '/welcome', label: 'Home'},
  { to: '/contact', label: 'Contact Us'}
]

const menuStyle = {
  color: 'red',
  textAlign: 'center'
}

const AppBarMenu = <span style={menuStyle}>{appBarButtons.map( itemOptions => <AppbarButtons {...itemOptions}/>)}</span>

const appBarOptions = {
  title: 'Status Register Mafia',
  iconElementRight: AppBarMenu
}


export const Header = () => <AppBar {...appBarOptions} />


export default Header
