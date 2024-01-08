import React from "react";
import Moongi from "../introduce/moongi";
import StudentList from "../page/student";
import '../introduce/main.css'

function MoongiMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Moongi />
    </div>
  )
}

export default MoongiMain;