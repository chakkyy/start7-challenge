import React from "react";
import Confetti from "react-confetti";

import "../../styles/components/Welcome.scss";

export const WelcomeScreen = () => {
  return (
    <div class="container">
      <Confetti />
      <h1>Welcome Flávio ! 😁</h1>
    </div>
  );
};
