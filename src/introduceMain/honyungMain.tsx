import React from "react";
import Honyung from "../introduce/honyung";
import StudentList from "../page/student";
import '../introduce/main.css'

function HonyungMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Honyung />
    </div>
  )
}

export default HonyungMain;