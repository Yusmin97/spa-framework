import React from "react";
import Euncheol from "../introduce/euncheol";
import StudentList from "../page/student";
import '../introduce/main.css'

function EuncheolMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Euncheol />
    </div>
  )
}

export default EuncheolMain;