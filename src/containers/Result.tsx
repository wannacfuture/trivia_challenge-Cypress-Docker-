import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";
import { cardProp } from "../types";

export interface ResultScreenProps {
  res: cardProp[];
  yourAns: string[];
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ res, yourAns }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate("/welcome");
  };

  return (
    <>
      <div className="relative justify-center self-center animate-fadeshort select-none">
        <div className="w-[650px] flex flex-col">
          <h2
            className="text-5xl mb-5"
            dangerouslySetInnerHTML={{
              __html: "Your score is : " + (10 - res.length) * 10 + "%",
            }}
          ></h2>
          <h2 className="text-2xl mb-5">Check your answers below.</h2>
          <ul className="wrong-answer justify-center self-center">
            {res.map((val, index) => {
              return (
                <li>
                  <div
                    className="mb-1 "
                    dangerouslySetInnerHTML={{
                      __html: val.question,
                    }}
                  ></div>
                  <div>
                    Your answer is :
                    <span className=" text-red-700">
                      {" "}
                      {yourAns[index]
                        ? yourAns[index]
                        : "You haven't selected the answer!"}
                    </span>
                  </div>
                  <div>
                    {" "}
                    Answer is :{" "}
                    <span className="text-green-600">
                      {val.correct_answer}{" "}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className=" flex  self-center justify-center">
            <div className="project-view w-[150px]" onClick={onHandleClick}>
              Got it
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
