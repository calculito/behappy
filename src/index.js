import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerserviceWorker from "./registerserviceWorker";
const App = lazy(() => import("./App"));
ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="full-page-loader">
          <img width="200" src="./logo192.png" alt="logo" />
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
