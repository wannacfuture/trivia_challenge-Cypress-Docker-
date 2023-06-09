import React, { useEffect, useState } from "react";
import API from "../API";
import { useQuery } from "react-query";
import { Card } from "./Card";

import "./style.scss";
import { LoadingScreen } from "./LoadingScreen";
import { uniqueId } from "lodash";
import { cardProp } from "../types";
import { ResultScreen } from "./Result";

export interface QuizScreenProps {}

export const QuizScreen: React.FC<QuizScreenProps> = () => {
  const [pageNum, setPageNum] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [res, setRes] = useState<cardProp[]>([]);
  const [yourAns, setYourAns] = useState<string[]>([]);

  const { data, isFetching, refetch } = useQuery(
    "getData",
    async () => {
      const { data } = await API.getDataAPI.getData();
      return data;
    },
    {
      enabled: false,
    }
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) setTotalCount(data.results.length);
  }, [data]);

  const onHandleNext = (selectedAns: string) => {
    if (selectedAns !== data.results[pageNum].correct_answer)
      setRes((res) => {
        let tempRes = [...res];
        tempRes.push(data.results[pageNum]);
        return tempRes;
      });
    setYourAns((yourAns) => {
      let tempAns = [...yourAns];
      tempAns.push(selectedAns);
      return tempAns;
    });
    setPageNum((pageNum) => pageNum + 1);
  };

  if (isFetching) return <LoadingScreen firstLoad={false} />;
  if (data && pageNum < totalCount)
    return (
      data && (
        <>
          <div className="flex max-w-full justify-center flex-col select-none">
            <Card
              key={uniqueId()}
              data={{
                ...data.results[pageNum],
              }}
              handleNext={onHandleNext}
              finish={pageNum === 9}
            />
          </div>
        </>
      )
    );
  else {
    return (
      <>
        <ResultScreen res={res} yourAns={yourAns} />
      </>
    );
  }
};
