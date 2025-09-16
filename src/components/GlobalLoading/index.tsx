import { memo } from "react";
import { PuffLoader } from "react-spinners";

const GlobalLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <PuffLoader size={80} color="#36d7b7" />
    </div>
  );
};

export default memo(GlobalLoading);
