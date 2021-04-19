import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import style
// import bootStyle from '../../../Main.scss';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    isValidated: false,
  };

  /**
   * Them main function that validates the form and fills in the error messages.
   * @returns bool Returns a boolean showing if the form is valid for submission or not.
   **/
  validate = () => {
    // this.formEl is a reference in the component to the form DOM element.
    const formEl = this.formEl;
    const formLength = formEl.length;
    let returnValue = false;
    /*
    * The checkValidity() method on a form runs the
    * html5 form validation of its elements and returns the result as a boolean.
    * It returns 'false' if at least one of the form elements does not qualify,
    * and 'true', if all form elements are filled with valid values.
    */
    if (formEl.checkValidity() === false) {
      for (let i = 0; i < formLength; i++) {
        // the i-th child of the form corresponds to the forms i-th input element
        const elem = formEl[i];
        /*
        * errorLabel placed next to an element is the container we want to use
        * for validation error message for that element
        */
        const errorLabel = elem.parentNode.querySelector("[class*='invalid-feedback']");
        /*
        * A form element contains also any buttuns contained in the form.
        * There is no need to validate a button, so, we'll skip that nodes.
        */
        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          /*
          * Each note in html5 form has a validity property.
          * It contains the validation state of that element.
          * The elem.validity.valid property indicates whether the element qualifies its validation rules or no.
          * If it does not qualify, the elem.validationMessage property will contain the localized validation error message.
          * We will show that message in our error container if the element is invalid, and clear the previous message, if it is valid.
          */
          if (!elem.validity.valid) {
            errorLabel.textContent = elem.validationMessage;
          // } else if (this.props.errorForm[elem.name]) {
          //   errorLabel.textContent = this.props.errorForm[elem.name]
          } else {
            errorLabel.textContent = '';
          }
        }
      }

      // Return 'false', as the formEl.checkValidity() method said there are some invalid form inputs.
      returnValue = false;
    } else {
      // The form is valid, so we clear all the error messages
      for (let i = 0; i < formLength; i++) {
        const elem = formEl[i];
        const errorLabel = elem.parentNode.querySelector('.invalid-feedback');
        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          errorLabel.textContent = '';
        }
      }

      // Return 'true', as the form is valid for submission
      returnValue = true;
    }
    return returnValue;
  };

  /**
  * This is the method that is called on form submit.
  * It stops the default form submission process and proceeds with custom validation.
  **/
  submitHandler = event => {
    event.preventDefault();
    // If the call of the validate method was successful, we can proceed with form submission. Otherwise we do nothing.
    if (this.validate()) {
      this.props.submit();
    }

    this.setState({ isValidated: true });
  };

  /**
  * Render the component as a regular form element with appended children from props.
  **/
  render() {
    // Add bootstrap's 'was-validated' class to the forms classes to support its styling
    let classNames = [];
    if (this.props.className) {
      classNames = [...this.props.className];
      delete this.props.className;
    }

    if (this.state.isValidated || this.props.errorForm) {
      classNames.push('was-validated');
    }

    if (this.props.errorForm) {
      this.validate();
    }

    // The form will have a refference in the component and a submit handler set to the component's submitHandler
    return (
      <form
        className={classNames}
        noValidate
        ref={form => (this.formEl = form)}
        onSubmit={this.submitHandler}
      >
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  className: PropTypes.string,
  submit: PropTypes.func,
  errorForm: PropTypes.object,
  children: PropTypes.array,
};

export default Form;
