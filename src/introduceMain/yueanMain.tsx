import React from "react";
import Yuean from "../introduce/yuean";
import StudentList from "../page/student";
import '../introduce/main.css'

function YueanMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Yuean />
    </div>
  )
}

export default YueanMain;