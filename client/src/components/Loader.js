import { SpinnerGap } from "phosphor-react";
import React from "react";

const Loader = () => {
  return (
    <div className="py-5">
      <SpinnerGap size={128} weight="regular" className="spinner m-auto" />
    </div>
  );
};

export default Loader;
