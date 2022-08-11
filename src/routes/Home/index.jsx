import { connect } from "dva";
import React, { useEffect } from "react";
import request from "../../utils/request";
import WithChild from "./Child";

function Home({ list = [], dispatch }) {
  console.log('list', list);
  useEffect(() => {
    if (list.length === 0) {
      dispatch({
        type: "login/getlist"
      })
    } else {
      console.log('缓存', list)
    }
  }, []);
  return <>
    <div>Home</div>
    <WithChild></WithChild>
    <ul>
      {
        list.length > 0 && list.map(item => <li key={item.id}>{item.name}</li>)
      }
    </ul>

  </>
}

const homeList = ({ login }) => ({ list: login.list })
export default connect(homeList)(Home)

