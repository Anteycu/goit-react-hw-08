import React from "react";
import "./PhonebookTitle.css";
import { CSSTransition } from "react-transition-group";

export default function PhonebookTitle() {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="TitleSlide"
      unmountOnExit
    >
      <div>
        <h1 className={"Title"}>Phonebook</h1>
      </div>
    </CSSTransition>
  );
}
