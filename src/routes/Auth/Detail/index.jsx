import { connect } from 'dva';
import React, { useEffect } from 'react'

 function Detail(props) {
    console.log('b',props);
    useEffect(()=>{
        props.dispatch({
            type:'login/hide'
        })
        return ()=>{
            props.dispatch({
                type:'login/show'
            })
        }
    },[])
  return (
    <div>Detail-{props.match.params.id}</div>
  )
}

export default connect()(Detail)
