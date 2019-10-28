import { html } from "lit-html"
import { styleMap } from "lit-html/directives/style-map";

const share = (memeUrl) => {
  navigator.share({
    title: "ContactMeme",
    text: "Check out your meme generated from my contacts!",
    url: memeUrl
  })
  .then(() => ({}))
  .catch(err => { throw err; });
}

const shareButtonStyles = {
  background: "orange",
  color: "white",
  textAlign: "center",
  border: "none",
  padding: "16px",
  fontSize: "20px"
}

const ShareButton = (memeUrl) => html`
  <button style=${styleMap(shareButtonStyles)} @click="${() => share(memeUrl)}">
    Share it!
  </button>
`;

export default ShareButton;
