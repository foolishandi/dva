import { withRouter } from "dva/router";
import React from "react";
const Child = (props) => {
    // console.log('a', props);
    return (<>Child</>)
}

const WithChild = withRouter(Child)
export default WithChild