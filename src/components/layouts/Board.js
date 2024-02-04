import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  getListStyle,
  getItemStyle,
  getTaskFromId,
  arraymove,
} from "../../helper/helper";
import { useDispatch } from "react-redux";
import {
  changeTaskStatus,
  reorderTasks,
} from "../../store/actions/taskActions";

export const Board = (props) => {
  const {
    blTasks,
    doneTasks,
    inProgressTasks,
    inReviewTasks,
    archivedTasks,
    toDoTasks,
  } = props.tmObj;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToDetail = (id) => {
    navigate("/detail/" + id);
  };
  const handleDragEnd = (data) => {
    if (
      data &&
      data.draggableId &&
      data.destination &&
      data.destination.droppableId
    ) {
      const oldStatus = data.source.droppableId;
      const newStatus = data.destination.droppableId;
      if (newStatus === oldStatus) {
        dispatch(
          reorderTasks(data.source.index, data.destination.index, newStatus)
        );
      } else {
        const taskObj = getTaskFromId(data.draggableId, props.tmObj);
        dispatch(changeTaskStatus(taskObj, newStatus));
      }
    }
  };
  return (
    <div className="container text-center">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="row">
          <Droppable droppableId="toDo">
            {(provided, snapshot) => (
              <div
                className="col tm-col"
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <h4>To Do</h4>
                {toDoTasks &&
                  toDoTasks.map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            className="card mb-1"
                            style={{
                              width: "18rem",
                              ...getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              ),
                            }}
                            key={item.id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="card-header">
                              <span
                                className="tm-link"
                                role="button"
                                onClick={() => goToDetail(item.id)}
                              >
                                {item.id}
                              </span>
                            </div>
                            <div>
                              <p className="title-ellipsis3">{item.title}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="inPg">
            {(provided, snapshot) => (
              <div
                className="col tm-col"
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <h4>In Progress</h4>
                {inProgressTasks &&
                  inProgressTasks.map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            className="card mb-1"
                            style={{
                              width: "18rem",
                              ...getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              ),
                            }}
                            key={item.id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="card-header">
                              <span
                                className="tm-link"
                                role="button"
                                onClick={() => goToDetail(item.id)}
                              >
                                {item.id}
                              </span>
                            </div>
                            <div>
                              <p className="title-ellipsis3">{item.title}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="inReview">
            {(provided, snapshot) => (
              <div
                className="col tm-col"
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <h4>In Review</h4>
                {inReviewTasks &&
                  inReviewTasks.map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            className="card mb-1"
                            style={{
                              width: "18rem",
                              ...getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              ),
                            }}
                            key={item.id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="card-header">
                              <span
                                className="tm-link"
                                role="button"
                                onClick={() => goToDetail(item.id)}
                              >
                                {item.id}
                              </span>
                            </div>
                            <div>
                              <p className="title-ellipsis3">{item.title}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="done">
            {(provided, snapshot) => (
              <div
                className="col tm-col"
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <h4>Done</h4>
                {doneTasks &&
                  doneTasks.map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            className="card mb-1"
                            style={{
                              width: "18rem",
                              ...getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              ),
                            }}
                            key={item.id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="card-header">
                              <span
                                className="tm-link"
                                role="button"
                                onClick={() => goToDetail(item.id)}
                              >
                                {item.id}
                              </span>
                            </div>
                            <div>
                              <p className="title-ellipsis3">{item.title}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};
