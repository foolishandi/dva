import { connect } from 'dva'
import React, { useEffect } from 'react'
import Tabbar from '../components/Tabbar'

 function App(props) {
    useEffect(()=>{
        // console.log(props)
    },[])
    return (
        <>
            {props.isShow?<Tabbar></Tabbar>:''}
            {props.children}
        </>

    )
}
const isShow=({login})=>({...login})
export default connect(isShow)(App)
