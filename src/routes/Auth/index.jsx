import { Link, Route } from 'dva/router'
import React from 'react'
import Detail from './Detail'
export default function Auth() {
  return (
    <div>
      <h2>Auth</h2>
      <Link to='/auth/detail/5'>详细页面</Link>
      <Route path='/auth/detail/:id' component={Detail}></Route>
    </div>
  )
}
