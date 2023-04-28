import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

export interface WelcomeScreenProps {}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  const navigate = useNavigate();
  const handleGo = useCallback(() => {
    navigate("/quiz");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex max-w-full justify-center flex-col select-none">
        <h2 className="relative animate-fromtop text-3xl text-white font-bold font-mono subpixel-antialiased">
          CAN YOU SCORE 100%?
        </h2>
        <h3 className="relative animate-fromleft text-5xl text-green-400 font-bold font-mono subpixel-antialiased">
          Welcome to the Trivia Challenge!
        </h3>
        <h4 className="relative animate-fromright text-4md text-gray-300 font-bold font-sans subpixel-antialiased">
          You will be presented with 10 multiple selection questions.
        </h4>
        <div className=" flex  self-center animate-fade">
          <div
            className="pulse project-view justify-center w-[150px]"
            onClick={handleGo}
          >
            GO!
          </div>
        </div>
      </div>
    </>
  );
};
