import React, { useState } from "react";

const CountPeople = () => {
  const [LoginCount, setLoginCount] = useState(0);
  const [ExitCount, setExitCount] = useState(0);

  const LoginIncrement = () => {
    setLoginCount(LoginCount + 1);
  };

  const ExitIncrement = () => {
    setExitCount(ExitCount + 1);
  };

  return (
    <div>
      <div className="my-5">
        <button className="btn btn-info me-3 h3" onClick={LoginIncrement}>
          Login
        </button>
        <p className="lead">{LoginCount} People Entered!!!</p>
      </div>
      <div className="mb-5">
        <button className="btn btn-success me-3 h3" onClick={ExitIncrement}>
          Exit
        </button>
        <p className="lead">{ExitCount} People Left!!!</p>
      </div>
    </div>
  );
};

export default CountPeople;
