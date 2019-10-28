import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";
import LoadContacts from "./LoadContacts";

const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  backgroundColor: "black",
  color: "white",
  padding: "20px",
  height: "60px",
  position: "fixed",
}

const Header = html`
  <div style=${styleMap(headerStyles)}>
    <div><span style="color:orange">C</span>ontact<span style="color:orange">M</span>eme</div>
    <div>
      ${LoadContacts}
    </div>
  </div>
`;


export default Header;
