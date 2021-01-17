import "./styles.css";
import App from './app.js'

const TABS = ["people", "planets"];
const props = {tabs: TABS}

document
  .getElementById("app")
  .insertAdjacentHTML("afterbegin", App(props)/* ✅ 1. init our app here ✅ */);
