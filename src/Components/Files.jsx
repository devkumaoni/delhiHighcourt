import React, { useCallback, useContext, useEffect, useState } from "react";
import { useYear } from "../Context/useYear";
import { useMonth } from "../Context/useMonth";
import data from "../../data/data";
import "./Files.css";

export default function Files() {
  const [year, setYear] = useContext(useYear);
  const [month, setMonth] = useContext(useMonth);
  // file selected
  const [file, setFile] = useState("");
  // Actual Data form data file
  const [data2, setData2] = useState(null);
  // array of all the keys in the Year object
  let [yearFilesArray, setYearFilesArray] = useState([]);
  const generateYearFilesArray = useCallback(() => {
    if (year && !month) {
      return Object.keys(data[Number(year)]);
    }
    return [];
  }, [year, month]);

  useEffect(() => {
    setYearFilesArray(generateYearFilesArray());
  }, [year, generateYearFilesArray]);

  useEffect(() => {
    if (year && !month) {
      setData2(data[Number(year)]);
    }
    if (year && month) {
      setData2(data[Number(year)][Number(month)]);
    }
  }, [year, month, data2]);

  function handleFileClick(e) {
    setYear(NaN);
    setMonth(NaN);
    setFile("");
    setData2(null);
  }

  return (
    <div className="files">
      {" "}
      <h2>Files</h2>
      <br />
      <div className="content">
        year: {year ? year : "Select the year"}
        <br />
        month: {month ? month : "Select the month"}
        <br />
        {year && !month ? (
          <div className="allfiles">
            <h2>All files of year {year}</h2>
            <br />
            {yearFilesArray.map((y) => {
              return data2[y]?.map((d, index) => (
                <button key={index} onClick={(e) => setFile(d)}>
                  <a className="fileBtn" target="_blank" href={file}>
                    {`${year}_${y}_${index + 1}`}
                  </a>
                </button>
              ));
            })}
          </div>
        ) : (
          ""
        )}
        {year && month && data2
          ? data2.map((d, index) => (
              <button key={index} onClick={(e) => setFile(d)}>
                <a className="fileBtn" target="_blank" href={file}>
                  File
                </a>
              </button>
            ))
          : ""}
      </div>
      {/* {file && (<img src={} alt="FIle" style={{height:"100px", width: '100px'}}  />)} */}
    </div>
  );
}
