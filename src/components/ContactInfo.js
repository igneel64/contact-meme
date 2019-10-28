import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";

const infoLayoutStyles = {
  display: "flex",
  flexBasis: "50%",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "5px",
  height: "100%"
}

const titleStyles = {
  textAlign: "center",
  fontSize: "18px",
  marginTop: "5px"
}

const ContactInfo = name => html`
  <div
    style=${styleMap(infoLayoutStyles)}
  >
    <div
      style=${styleMap(titleStyles)}
    >
      ${name}
    </div>
    <div data-name=${name}></div>
  </div>
`;

export default ContactInfo;
