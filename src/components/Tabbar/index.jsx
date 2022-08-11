import { NavLink } from 'dva/router'
import React from 'react'
import styles from './index.moudle.scss'
export default function Tabbar() {
  return (
    <ul className={styles.tabbar}>
        <li><NavLink to='/login' activeClassName={styles.active}>Login</NavLink></li>
        <li><NavLink to='/home' activeClassName={styles.active}>Home</NavLink></li>
        <li><NavLink to='/auth' activeClassName={styles.active}>Auth</NavLink></li>
    </ul>
  )
}
