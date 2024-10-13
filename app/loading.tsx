import LottieHandler from "@/components/LottieHandler/LottieHandler";

const Loading = () => {
  return (
    <div className="container flex justify-center items-center">
          <div style={{ marginTop: "10%" }}>
            <LottieHandler type="loading" message="Loading please wait..." />
          </div>
    </div>
  );
};

export default Loading;
