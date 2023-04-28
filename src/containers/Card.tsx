import React, { useEffect, useState } from "react";
import { concat, shuffle, uniqueId } from "lodash";

import "./cardstyle.scss";
import { cardProp } from "../types";

export interface CardProps {
  data: cardProp;
  handleNext: (selectedAns: string) => void;
  finish: boolean;
}

export const Card: React.FC<CardProps> = ({ data, handleNext, finish }) => {
  const [selectedAns, setSelectedAns] = useState("");
  const [shuffledData, setShuffledData] = useState<string[]>([]);

  useEffect(() => {
    setShuffledData(
      shuffle(concat(data.correct_answer, ...data.incorrect_answers))
    );
  }, [data]);
  const onHandleClick = (val: string) => {
    setSelectedAns(val);
  };

  return (
    <>
      <div className="relative justify-center self-center animate-fadeshort">
        <div className="container">
          <h2 dangerouslySetInnerHTML={{ __html: data.question }}></h2>
          <ul>
            {shuffledData.map((val) => {
              return (
                <li key={val} onClick={() => onHandleClick(val)}>
                  <input type="radio" id={val} name="selector" />
                  <label
                    htmlFor={val}
                    dangerouslySetInnerHTML={{ __html: val }}
                  ></label>

                  <div className="check"></div>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <div className=" flex  self-center justify-center">
            <div
              className="project-view w-[150px]"
              style={{ marginLeft: 50 }}
              onClick={() => handleNext(selectedAns)}
            >
              {!finish ? "Next" : "Finish"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
