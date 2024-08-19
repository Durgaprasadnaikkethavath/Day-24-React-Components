import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoListClass from "./componets/TodoListClass.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <App />
  <TodoListClass />
  // </StrictMode>,
);
