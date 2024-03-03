import React, { useCallback, useContext, useEffect, useState } from "react";
import { useYear } from "../Context/useYear";
import { useMonth } from "../Context/useMonth";
import data from "../../data/data";
import "./Month.css";

export default function Month() {
  const [year] = useContext(useYear);
  const [month, setMonth] = useContext(useMonth);
  const [availableMonth, setAvailableMonth] = useState([]);

  const fetchAvailableMonth = useCallback(() => {
    if (year) {
      console.log("months: ", Object.keys(data[Number(year)]));
      return Object.keys(data[Number(year)]);
    }
    return [];
  }, [year, data]);

  const monthObj = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "Novermber",
    12: "December",
  };

  useEffect(() => {
    setAvailableMonth(fetchAvailableMonth());
  }, [year]);

  return (
    <div>
      {/* <h2>Month{month? (month): ("")}</h2> */}
      {year ? (
        <>
          <div className="months">
            {availableMonth?.map &&
              availableMonth.map((m) => (
                <div key={m} className="btns" onClick={() => setMonth(m)}>
                  {monthObj[m]}
                </div>
              ))}

            {/* Previous Month */}
            {/* <div className="btns" onClick={(e) => setMonth(1)}>
              January
            </div>
            <div className="btns" onClick={(e) => setMonth(2)}>
              Febuary
            </div>
            <div className="btns" onClick={(e) => setMonth(3)}>
              March
            </div>
            <div className="btns" onClick={(e) => setMonth(4)}>
              April
            </div>
            <div className="btns" onClick={(e) => setMonth(5)}>
              May
            </div>
            <div className="btns" onClick={(e) => setMonth(6)}>
              June
            </div>
            <div className="btns" onClick={(e) => setMonth(7)}>
              July
            </div>
            <div className="btns" onClick={(e) => setMonth(8)}>
              August
            </div>
            <div className="btns" onClick={(e) => setMonth(9)}>
              September
            </div>
            <div className="btns" onClick={(e) => setMonth(10)}>
              October
            </div>
            <div className="btns" onClick={(e) => setMonth(11)}>
              November
            </div>
            <div className="btns" onClick={(e) => setMonth(12)}>
              December
            </div> */}
          </div>
        </>
      ) : (
        <div>Select the Year</div>
      )}
    </div>
  );
}
