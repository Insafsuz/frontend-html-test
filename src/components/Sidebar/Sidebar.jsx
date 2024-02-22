import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Sidebar.scss'

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
]

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
]

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpened: false,
    }
  }

  toggleSidebar = () => {
    this.setState(state => ({ isOpened: !state.isOpened }))
  }

  goToRoute = path => {
    console.log(`going to "${path}"`)
  }

  render() {
    const { isOpened } = this.state
    const containerClassnames = classnames('sidebar', { opened: isOpened })

    return (
      <aside className={containerClassnames}>
        <div className='sidebar__logo logo'>
          <img className='logo__icon' src={logo} alt='TensorFlow logo' />
          <span className={`logo__text ${isOpened ? 'opened' : ''}`}>
            TensorFlow
          </span>
          <button className='logo__btn' onClick={this.toggleSidebar}>
            <FontAwesomeIcon icon={isOpened ? 'angle-right' : 'angle-left'} />
          </button>
        </div>

        <nav className='sidebar__menu menu-sidebar'>
          <ul className='menu-sidebar__list'>
            {routes.map(route => (
              <li
                className={`menu-sidebar__item ${isOpened ? 'opened' : ''}`}
                key={route.title}
                onClick={() => this.goToRoute(route.path)}
              >
                <NavLink to={route.path} className='menu-sidebar__link'>
                  <FontAwesomeIcon icon={route.icon} />
                  <span>{route.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <ul className='sidebar__action action-sidebar'>
          {bottomRoutes.map(route => (
            <li
              className={`action-sidebar__item ${isOpened ? 'opened' : ''}`}
              key={route.title}
              onClick={() => this.goToRoute(route.path)}
            >
              <NavLink to={route.path} className='action-sidebar__link'>
                <FontAwesomeIcon icon={route.icon} />
                <span>{route.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    )
  }
}
