import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";
import { until } from "lit-html/directives/until";
import placeholderImg from "../assets/images/placeholder.png";
import ImageFlip from "../API/ImageFlip";
import ShareButton from "./ShareButton";
import ContactInfo from "./ContactInfo";

const contactItemStyles = {
  border: "1px dashed orange",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  margin: "10px",
  padding: "10px",
  height: "200px",
  width: "90%"
};

const memeStyles = {
  width: "100%",
  height: "100%",
  padding: "5px"
};

const getCaptionedMeme = (captionText, templateId) => {
  const [topText, bottomText] = captionText.split(/\s/);
  return ImageFlip.getCaption({
    templateId,
    topText,
    bottomText
  });
};

const ContactItem = (meme, { name: [primaryName] }) => html`
  <div style=${styleMap(contactItemStyles)}>
    <div style=${styleMap({ flexBasis: "50%", height: "100%" })}>
      ${until(
        getCaptionedMeme(primaryName, meme.id).then(captionedMeme => {
          render(
            ShareButton(captionedMeme.url),
            document.querySelector(`[data-name="${primaryName}"]`)
          );
          return html`
            <img
              style=${styleMap(memeStyles)}
              src=${captionedMeme.url}
              alt=${`${primaryName} meme`}
            />
          `;
        }),
        html`
          <img
            style=${styleMap(memeStyles)}
            src=${placeholderImg}
            alt="placeholder"
          />
        `
      )}
    </div>
    ${ContactInfo(primaryName)}
  </div>
`;

export default ContactItem;
