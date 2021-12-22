import React, { useState } from "react";
import Contact from "./Contact";

interface IContact {
  name: string;
  email: string;
}

const Contacts = () => {
  const [contact, setContact] = useState<IContact>({} as IContact);
  const [contactList, setContactList] = useState<IContact[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newContact = { ...contact, [event.target.name]: event.target.value };
    setContact(newContact);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    setContactList([...contactList, contact]);
    setContact({
      name: "",
      email: "",
    });
    event.preventDefault();
  };

  const handleRemove = (email: string) => {
    const newContactList = contactList.filter((contact) => contact.email !== email);
    setContactList(newContactList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Contact Name" value={contact.name} onChange={handleChange} />
        <input
          type="email"
          name="email"
          placeholder="Contact Email"
          value={contact.email}
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </form>
      {contactList.map((contact) => (
        <Contact key={contact.email} contact={contact} handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default Contacts;
