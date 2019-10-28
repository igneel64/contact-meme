import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";

const footerStyles = {
  width: "100%",
  textAlign: "center",
  color: "white",
  backgroundColor: "black",
  padding: "20px"
};

const Footer = html`
  <footer style=${styleMap(footerStyles)}>
    Made with &#10084; by @igneel64
  </footer>
`;

export default Footer;
