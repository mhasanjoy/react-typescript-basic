import React from "react";

interface IProps {
  contact: {
    name: string;
    email: string;
  };
  handleRemove: (email: string) => void;
}

const Contact = ({ contact, handleRemove }: IProps) => {
  const { name, email } = contact;

  return (
    <div>
      <p>
        <strong>Name: </strong>
        {name}
      </p>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
      <button onClick={() => handleRemove(email)}>Remove</button>
    </div>
  );
};

export default Contact;
