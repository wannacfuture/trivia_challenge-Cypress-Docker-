import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

export interface LoadingScreenProps {
  firstLoad: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ firstLoad }) => {
  const [loadFinished, setLoadFinished] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const mytimer = setTimeout(() => setLoadFinished(true), 1000);
    return () => {
      clearTimeout(mytimer);
    };
  }, []);
  useEffect(() => {
    if (loadFinished && firstLoad) navigate("/welcome");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadFinished]);

  return (
    <>
      <div className="flex max-w-full justify-center flex-col select-none">
        <div className="lds-ring justify-center self-center">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
