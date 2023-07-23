import TaskOne from "./Pages/TaskOne";
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskTwo from "./Pages/TaskTwo";
import AppRoutes from "./Pages/AppRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppRoutes/>}>
          <Route path="taskone" element={<TaskOne />} />
          <Route path="tasktwo" element={<TaskTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
