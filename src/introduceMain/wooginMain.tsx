import React from "react";
import Woogin from "../introduce/woogin";
import StudentList from "../page/student";
import '../introduce/main.css'

function WooginMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Woogin />
    </div>
  )
}

export default WooginMain;