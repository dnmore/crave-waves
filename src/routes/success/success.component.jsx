import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { FaGripLines } from "react-icons/fa";
import { SuccessContainer, IconContainer } from "./success.styles";

const Success = () => {
  return (
    <SuccessContainer>
      <div>
        <h2>Thank You!</h2>
        <p>Your order has been successfully placed.</p>
        <IconContainer
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <FaGripLines style={{ fontSize: "50px" }} />
          <MdDeliveryDining style={{ fontSize: "100px" }} />
        </IconContainer>
      </div>
    </SuccessContainer>
  );
};

export default Success;
