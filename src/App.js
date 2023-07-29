import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./Components/Layout";
import TaskManagementSystem from "./Modules/Taskmanagement";
import NavigationBar from "./Components/Navbar/Navbar";
import Login from "./Components/Login";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Layout>
          <NavigationBar />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/tasks" element={<TaskManagementSystem />} />
          </Routes>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
