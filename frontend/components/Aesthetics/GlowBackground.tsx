import React from "react";

const GlowBackground = () => {
  return (
    <div className="absolute w-screen h-full">
      <div
        className="absolute left-10 top-10 w-[300px] h-[300px] blur-[150px]"
        style={{ background: "rgba(114, 49, 253, 0.6)" }}
      ></div>
      <div
        className="absolute left-10 bottom-10 w-[300px] h-[300px] blur-[150px]"
        style={{ background: "rgba(192, 49, 253, 0.6)" }}
      ></div>
      <div
        className="absolute left-1/2 w-[300px] h-[300px] blur-[150px] -translate-x-1/2 top-10"
        style={{ background: "rgba(192, 49, 253, 0.6)" }}
      ></div>
      <div
        className="absolute left-1/2 w-[300px] h-[300px] blur-[150px] -translate-x-1/2 bottom-10 marker"
        style={{ background: "rgba(114, 49, 253, 0.6)" }}
      ></div>
      <div
        className="absolute right-10 top-10 w-[300px] h-[300px] blur-[150px]"
        style={{ background: "rgba(114, 49, 253, 0.6)" }}
      ></div>
      <div
        className="absolute right-10 bottom-10 w-[300px] h-[300px] blur-[150px]"
        style={{ background: "rgba(192, 49, 253, 0.6)" }}
      ></div>
    </div>
  );
};

export default GlowBackground;
