import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";
import Warning from "./Warning";

const landingLayoutStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: "#000000e0"
};

const mainTitleStyles = {
  color: "orange",
  fontSize: "120px"
};

const subtitleStyles = {
  color: "bisque"
};

const isContactAPISupported =
  "contacts" in navigator && "ContactsManager" in window;

const Landing = html`
  <div style=${styleMap(landingLayoutStyles)}>
    <p style=${styleMap(mainTitleStyles)}>
      C-M
    </p>
    <p style=${styleMap(subtitleStyles)}>
      Using Latest Web APIs since Chrome 78
    </p>
    ${!isContactAPISupported ? Warning : ""}
  </div>
`;

export default Landing;
