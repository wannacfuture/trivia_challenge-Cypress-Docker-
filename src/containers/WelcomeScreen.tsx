import React from "react";

export interface WelcomeScreenProps {}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  return (
    <>
      <div className="flex max-w-full justify-center ">
        <h2 className="animate-bounce  text-3xl text-white font-bold font-mono subpixel-antialiased">
          CAN YOU SCORE 100%?
        </h2>
      </div>
    </>
  );
};
