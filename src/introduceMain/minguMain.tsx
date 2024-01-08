import React from "react";
import Mingu from "../introduce/mingu";
import StudentList from "../page/student";
import '../introduce/main.css'

function MinguMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Mingu />
    </div>
  )
}

export default MinguMain;