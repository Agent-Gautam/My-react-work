//row.js
import { useState } from "react";
import Box from "./box";

export default function Row({ handlerow, code }) {
  const [rowArray, setrowArray] = useState(Array(4).fill("-"));
  const [clicked, setclicked] = useState(false);
  const row = rowArray.map((val, id) => (
    <Box key={id} id={id} value={val} increment={increment} />
  ));

  function increment(id) {
    setrowArray((prevArray) => {
      return [
        ...prevArray.map((v, i) => {
          if (i === id) {
            if (prevArray[id] === "-" || prevArray[id] === "9") {
              return "1";
            } else {
              return String(Number(prevArray[id]) + 1);
            }
          } else return v;
        }),
      ];
    });
  }
  let greendot = <div className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-green-800 rounded-full"></div>
  let whitedot = <div className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-white rounded-full"></div>
  let greendotsArr = [], whitedotsArr = [];
  rowArray.forEach((v,i) => {
    if(code[i] === v) greendotsArr.push(greendot);
    else if(code.includes(v)) whitedotsArr.push(whitedot);
  })
  const dots = [...greendotsArr, ...whitedotsArr]

  //winning condition 
  function win() {
    return rowArray.every((el,id) => code[id] === el);
  }

  return (
    <div className="row flex flex-row gap-4 md:gap-7">
      <div className=" flex flex-row md:gap-1">
        {row}
      </div>
      <button
        className="w-[50px] h-[50px] rounded border-4 bg-gray-300"
        onClick={(e) => {

          !win() && handlerow(e);
          setclicked(true);
          
        }}
      >
        -O-
      </button>
      <div className="flex flex-row items-center md:gap-1 md:w-[150px] w-[100px]">
        {clicked && dots}
      </div>
      {clicked && win() && <h1 className="absolute w-[490px] rounded h-[50px] font-bold text-center bg-white  text-3xl text-green-700">Success !</h1>}
    </div>
  );
}
