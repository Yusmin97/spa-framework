import React from "react";
import Junhyeon from "../introduce/junhyeon";
import StudentList from "../page/student";
import '../introduce/main.css'

function JunhyeonMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Junhyeon />
    </div>
  )
}

export default JunhyeonMain;