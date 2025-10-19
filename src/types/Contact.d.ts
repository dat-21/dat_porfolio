import React from "react";

declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

// Khai báo cho component Contact
declare class Contact extends React.Component {
    render(): JSX.Element;
}

export default Contact;
