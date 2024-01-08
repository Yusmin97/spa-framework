import React from "react";
import Sosa from "../introduce/sosa";
import StudentList from "../page/student";
import '../introduce/main.css'

function SosaMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Sosa />
    </div>
  )
}

export default SosaMain;