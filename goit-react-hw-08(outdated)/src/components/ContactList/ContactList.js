import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import "./ContactList.css";

const ContactList = ({ contacts }) => (
  <TransitionGroup component="ul" className="ContactList">
    {contacts.map(({ id }) => (
      <CSSTransition key={id} timeout={250} classNames="TaskListSlide">
        <ContactListItem key={id} id={id} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
