import React from "react";
import Youngjun from "../introduce/youngjun";
import StudentList from "../page/student";
import '../introduce/main.css'

function YoungjunMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Youngjun />
    </div>
  )
}

export default YoungjunMain;