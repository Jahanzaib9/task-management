import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import axios from "axios";
import Task from "../../Components/Task";

const TaskManagementSystem = () => {
  const [tasks, setTasks] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const apiBaseUrl = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/tasks`)
      .then((response) => {
        let user_group = localStorage.getItem("groupId");

        let taskList = response?.data.filter(
          (item) => item?.groupId === user_group
        );

        setTasks(taskList);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);

    axios
      .post(`${apiBaseUrl}/tasks`, newTask)
      .then(() => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 1500);
      })
      .catch((error) => console.log(error));
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    axios
      .put(
        `${apiBaseUrl}/tasks/${taskId}`,
        updatedTasks.find((task) => task.id === taskId)
      )
      .then(() => setTasks(updatedTasks))
      .catch((error) => console.log(error));
  };

  const handleDeleteTask = (taskId) => {
    axios
      .delete(`${apiBaseUrl}/tasks/${taskId}`)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== taskId));
      })
      .catch((error) => console.log(error));
  };

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setTasks((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  return (
    <Container style={{ overflow: "scroll", height: "90vh" }}>
      <h3 style={{ marginTop: "10px" }}>Add Task</h3>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const newTask = {
            id: Date.now(),
            title: e.target.title.value,
            description: e.target.description.value,
            completed: false,
            groupId: localStorage.getItem("groupId"),
          };
          handleAddTask(newTask);
          e.target.reset();
        }}
      >
        <Row className="mb-3">
          <Form.Group
            className="mb-3"
            as={Col}
            md="3"
            controlId="validationCustom03"
          >
            <Form.Control
              name="title"
              type="text"
              placeholder="Title"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            as={Col}
            md="3"
            controlId="validationCustom03"
          >
            <Form.Control
              name="description"
              type="text"
              placeholder="Description"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Button type="submit">Add Task</Button>
          </Form.Group>
        </Row>
      </Form>

      {showSuccessMessage && (
        <Alert
          style={{ width: "50%" }}
          variant="success"
          onClose={() => setShowSuccessMessage(false)}
          dismissible
        >
          Task added successfully!
        </Alert>
      )}

      <DndProvider backend={HTML5Backend}>
        <Row style={{ marginTop: "50px" }}>
          {tasks.map((task, index) => (
            <Col className="mb-4" lg={12} md={12} sm={6} xs={12}>
              <Task
                key={task.id}
                task={task}
                onComplete={handleCompleteTask}
                onDelete={handleDeleteTask}
                index={index}
                moveCard={moveCard}
              />
            </Col>
          ))}
        </Row>
      </DndProvider>
    </Container>
  );
};

export default TaskManagementSystem;
