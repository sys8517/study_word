import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.ts";

export interface IDay {
  id: number;
  day : number;
}

export default function DayList() {
    const days : IDay[]= useFetch("http://localhost:3001/days"); //custom hook 사용

    if(days.length===0) {
      return <span>Loading...</span>
    }

//   const [days, setDays] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/days')
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         setDays(data);
//     })
//   }, []); //렌더링 후 한번만 실행하기 위해 빈 배열을 넣어준다.

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
