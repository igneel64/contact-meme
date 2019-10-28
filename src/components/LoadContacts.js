import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";
import Contacts from "./Contacts";

const handleClick = () => {
  const contactsProps = ["name"];
  const opts = { multiple: true };

  const contactsList = document.getElementById("contacts-list");
  const { style: contactsStyle } = contactsList;

  navigator.contacts
    .select(contactsProps, opts)
    .then(res => {
      render(Contacts(res), contactsList);

      contactsStyle.display = "block";
      window.scrollTo({
        top: contactsList.offsetTop,
        behavior: 'smooth'
      });
  
    })
    .catch(err => {
      render(err, contactsList);
      throw err;
    });
};

const buttonStyles = {
  background: "none",
  border: "1px solid orange",
  padding: "10px",
  textAlign: "center",
  color: "orange"
};

const LoadContacts = html`
  <button style=${styleMap(buttonStyles)} @click="${handleClick}">
    Load Contacts
  </button>
`;

export default LoadContacts;
