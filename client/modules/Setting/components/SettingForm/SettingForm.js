import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

// import component
import { Form } from '../../../Form/pages/Form'

export class ItemForm extends Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  submitItem = () => {
    const taxRef = this.refs.tax;

    if (taxRef.value) {
      this.props.saveSetting(taxRef.value);
    }
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <Form submit={this.submitItem}>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group row'>
                <label htmlFor='tax' className='col-sm-3 col-form-label'>
                  Tax
                </label>
                <div className='col-sm-9'>
                  <input
                    required
                    name='tax'
                    type='number'
                    className={'form-control'}
                    id='tax'
                    placeholder='Input Tax'
                    ref='tax'
                    defaultValue={this.props.setting.tax}
                  />
                  <div className={'invalid-feedback'} />
                </div>
              </div>
            </div>
          </div>

          <button type={'submit'} className={'btn btn-primary'}>
            <FormattedMessage id='submit' />
          </button>
        </Form>
      </div>
    )
  }
}

ItemForm.propTypes = {
  setting: PropTypes.object,
  saveSetting: PropTypes.func.isRequired
}

export default injectIntl(ItemForm)
