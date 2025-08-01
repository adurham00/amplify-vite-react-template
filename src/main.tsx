import "./index.css";
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import ReactDOM from "react-dom/client";
import App from "./App";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
      <App />
);