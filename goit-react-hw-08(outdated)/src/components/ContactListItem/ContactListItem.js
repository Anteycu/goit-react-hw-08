import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import styles from "./contactListItem.module.css";

function ContactListItem({ name, number, onRemove }) {
  return (
    <li className={styles.contactsCards}>
      <p className={styles.contactsCardsItems}>{name}:</p>
      <p className={styles.contactsCardsItems}>{number}</p>
      <button className={styles.button} type="button" onClick={onRemove}>
        x
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onRemove: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const item = contactsSelectors.getContactsById(state, ownProps.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
