import { render, html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";
import "./index.scss";
import Header from "./components/Header";
import Landing from "./components/Landing";

const globalStyles = {
  backgroundColor: "#fff",
};

const contactsStyles = {
  paddingTop: "60px",
  display: "none",
  minHeight: "100vh",
};

const AppTemplate = html`
  <div style=${styleMap(globalStyles)}>
    ${Header} ${Landing}
    <div style=${styleMap(contactsStyles)} id="contacts-list"></div>
  </div>
`;

render(AppTemplate, document.body);
