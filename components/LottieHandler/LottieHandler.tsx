"use client"
import Lottie from "lottie-react";
import notFound from "@/assets/lottieFiles/notFound.json";
import empty from "@/assets/lottieFiles/empty.json";
import loading from "@/assets/lottieFiles/loading.json";
import error from "@/assets/lottieFiles/error.json";
import success from "@/assets/lottieFiles/success.json";

const lottieFilesMap = {
  notFound,
  empty,
  loading,
  error,
  success,
};

type LottieHandlerProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
  className?: string;
};

const LottieHandler = ({ type, message, className }: LottieHandlerProps) => {
  const lottie = lottieFilesMap[type];
  const messageStyle =
    type === "error"
      ? { fontSize: "19px", color: "red" }
      : { fontSize: "19px", marginTop: "30px" };

  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <Lottie animationData={lottie} style={{ width: "200px" }} />
      {message && <h4 className="text-gray-400" style={messageStyle}>{message}</h4>}
    </div>
  );
};

export default LottieHandler;
