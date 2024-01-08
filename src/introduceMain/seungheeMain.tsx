import React from "react";
import Seunghee from "../introduce/seunghee";
import StudentList from "../page/student";
import '../introduce/main.css'

function SeungheeMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Seunghee />
    </div>
  )
}

export default SeungheeMain;