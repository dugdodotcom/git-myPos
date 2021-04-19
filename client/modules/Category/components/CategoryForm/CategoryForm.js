import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// import component
import { Form } from '../../../Form/pages/Form';

export class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  submitCategory = () => {
    const nameRef = this.refs.name;

    if (nameRef.value) {
      this.props.saveCategory(nameRef.value);
    }
  }

  render() {
    return (
      <div>
        <Form submit={this.submitCategory}>
          <div className={'row'}>
            <div className={'col-6'}>
              <div className={'form-group'}>
                <label htmlFor="category-name">
                  Category Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  className={'form-control'}
                  id="category-name"
                  placeholder="Input Category Name"
                  ref="name"
                  defaultValue={this.props.category.name}
                />
                <div className={'invalid-feedback'}>
                </div>
              </div>
            </div>
          </div>
          <button type={"submit"} className={'btn btn-primary'}><FormattedMessage id="submit" /></button>
        </Form>
      </div>
    );
  }
}

CategoryForm.propTypes = {
  category: PropTypes.object,
  saveCategory: PropTypes.func.isRequired,
};

export default injectIntl(CategoryForm);
