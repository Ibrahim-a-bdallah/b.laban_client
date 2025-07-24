import Lottie from "lottie-react";

import error from "../../../../public/LottieFiles/Error.json";
import networkError from "../../../../public/LottieFiles/NetworkErorr.json";
import empty from "../../../../public/LottieFiles/Empty.json";
import notFound from "../../../../public/LottieFiles/NotFound.json";
import fill from "../../../../public/LottieFiles/Fill.json";

const loading = import("../../../../public/Loading.json");
const lottieType = {
  loading,
  error,
  networkError,
  empty,
  notFound,
  fill,
};

type TProps = {
  message?: string;
  type: keyof typeof lottieType;
  styled?: string;
  cssStyle?: React.CSSProperties;
};

const LottieHandler = ({ message, type, styled, cssStyle }: TProps) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <Lottie
        className={`${styled}`}
        animationData={lottieType[type]}
        style={cssStyle ?? { width: "300px" }}
      />
      <p>{message}</p>;
    </div>
  );
};
export default LottieHandler;
