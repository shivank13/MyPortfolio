import React from "react";
import { CONTACT } from "../constants/data";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p><a href={`tel:${CONTACT.phoneNo}`} className="border-b">
          {CONTACT.phoneNo}
        </a>
        </p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
