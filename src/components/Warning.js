import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";

const Warning = html`
  <p
    style=${styleMap({
      color: "red",
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center"
    })}
  >
    Well this browser does not support this API, so it won't work! <br />
    Consider using your phone and the latest Chrome version!
  </p>
`;

export default Warning;
