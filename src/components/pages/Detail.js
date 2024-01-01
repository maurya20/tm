import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskFromId } from "../../helper/helper";

export const Detail = (props) => {
  const { taskId } = useParams();
  const [taskObj, setTaskObj] = useState(null);

  useEffect(() => {
    setTaskObj(getTaskFromId(taskId, props.tmObj));
  }, [taskId, props.tmObj?.lastTaskId]);
  return (
    <div className="form-horizontal">
      <h3>{taskObj?.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: taskObj?.description }}></div>
    </div>
  );
};
