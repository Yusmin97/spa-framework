import React from "react";
import Youngsik from "../introduce/youngsik";
import StudentList from "../page/student";
import '../introduce/main.css'

function YoungsikMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Youngsik />
    </div>
  )
}

export default YoungsikMain;