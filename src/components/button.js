import React, { useState } from "react";

const Button = ({ Nome }) => {
  const [cor, setCor] = useState(false);

  return (
    <div>
      <button
        type="button"
        className={cor ? "buttontrue" : "buttonfalse"}
        onClick={() => setCor(true)}
      >
        {" "}
        {Nome}{" "}
      </button>
    </div>
  );
};

export default Button;
