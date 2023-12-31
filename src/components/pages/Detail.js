import React from "react";
import { useParams } from "react-router-dom";

export const Detail = (props) => {
  const { taskId } = useParams();
  return <>Detail{taskId}</>;
};
