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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerserviceWorker();
