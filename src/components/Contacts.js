import { html } from "lit-html";
import { repeat } from "lit-html/directives/repeat";
import { styleMap } from "lit-html/directives/style-map";
import { until } from "lit-html/directives/until";
import ContactItem from "./ContactItem";
import ImageFlip from "../API/ImageFlip";
import { getRandomInt } from "../helpers";
import Footer from "./Footer";

const contactWrapperStyles = {
  display: "flex",
  margin: "0 auto"
};

const listStyles = {
  listStyle: "none",
  color: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: "0px"
};

const Contacts = contacts => html`
  <div id="contacts-wrapper" style=${styleMap(contactWrapperStyles)}>
    <ul style=${styleMap(listStyles)}>
      ${
        until(
          ImageFlip.getMemes()
          .then( ({ memes }) =>
             repeat(
              contacts,
              contact => ContactItem(memes[getRandomInt(0, memes.length)], contact)
              )
          )
        )
      }
    </ul>
  </div>
  ${Footer}
`;

export default Contacts;
