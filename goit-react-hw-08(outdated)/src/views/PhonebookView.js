import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import PhonebookTitle from "../components/PhonebookTitle/PhonebookTitle";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import contactsOperations from "../redux/contacts/contactsOperations";
import contactsSelectors from "../redux/contacts/contactsSelectors";
import { authSelectors } from "../redux/auth";

class PhonebookView extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/login");
      return;
    }

    this.props.onFetchContacts();
  }

  componentDidUpdate() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/login");
      return;
    }
  }

  render() {
    return (
      <>
        <PhonebookTitle />
        <ContactForm />
        <h2 className={"Contacts"}>Contacts</h2>

        {this.props.isLoadingContacts && <h2>Loading contacts...</h2>}
        <CSSTransition
          in={!this.props.isLoadingContacts}
          timeout={1000}
          classNames="Fade"
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <CSSTransition
          in={true}
          timeout={500}
          classNames="SlideIn"
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  isAuthenticated: authSelectors.isAuthenticated(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
