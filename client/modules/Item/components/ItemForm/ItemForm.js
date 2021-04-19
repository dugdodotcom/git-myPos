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
    const nameRef = this.refs.name;
    const categoryIdRef = this.refs.category_id;
    const rateRef = this.refs.rate;
    const quantityRef = this.refs.quantity;
    const perRef = this.refs.per;
    const imageRef = this.refs.image;
    console.log(imageRef.files.item(0));
    if (nameRef.value && categoryIdRef.value && rateRef.value && quantityRef.value && perRef.value) {
      this.props.saveItem(nameRef.value, categoryIdRef.value, rateRef.value, quantityRef.value, perRef.value, imageRef.files.item(0))
    }
  }

  categoryOption = category => {
    return <option value={category.id} key={category.id}>{category.name}</option>
  }

  handleBookCoversChange = () => {
    console.log(this.refs.image.files.item(0));
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <Form submit={this.submitItem}>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group row'>
                <label htmlFor='item-name' className='col-sm-3 col-form-label'>
                  Item Name
                </label>
                <div className='col-sm-9'>
                  <input
                    required
                    name='name'
                    type='text'
                    className={'form-control'}
                    id='item-name'
                    placeholder='Input Item Name'
                    ref='name'
                    defaultValue={this.props.item.name}
                  />
                  <div className={'invalid-feedback'} />
                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className='form-group row'>
                <label htmlFor='category' className='col-sm-3 col-form-label'>
                  Category
                </label>
                <div className='col-sm-9'>
                  <select className="custom-select" ref='category_id' id='category' defaultValue={this.props.item.category_id}>
                    {this.props.categories.map(category =>
                      this.categoryOption(category)
                    )}
                  </select>
                  <div className={'invalid-feedback'} />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className='col-6'>
              <div className='form-group row'>
                <label htmlFor='item-rate' className='col-sm-3 col-form-label'>
                  Rate
                </label>
                <div className='col-sm-9'>
                  <input
                    required
                    name='rate'
                    type='number'
                    className={'form-control'}
                    id='item-rate'
                    placeholder='Input Item Rate'
                    ref='rate'
                    defaultValue={this.props.item.rate}
                    step="0.01"
                  />
                  <div className={'invalid-feedback'} />
                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className='form-group row'>
                <label htmlFor='item-quantity' className='col-sm-3 col-form-label'>
                  Quantity
                </label>
                <div className='col-sm-9'>
                  <input
                    required
                    name='quantity'
                    type='number'
                    className={'form-control'}
                    id='item-quantity'
                    placeholder='Input Item Quantity'
                    ref='quantity'
                    defaultValue={this.props.item.quantity}
                    step="0.01"
                  />
                  <div className={'invalid-feedback'} />
                </div>
              </div>
            </div>
          </div>

          <div className="row flex-row-reverse">
            <div className='col-6'>
              <div className='form-group row'>
                <label htmlFor='item-per' className='col-sm-3 col-form-label'>
                  Per
                </label>
                <div className='col-sm-9'>
                  <input
                    required
                    name='per'
                    type='text'
                    className={'form-control'}
                    id='item-per'
                    placeholder='Input Item Per eg(Kg, pcs, sachet)'
                    ref='per'
                    defaultValue={this.props.item.per}
                  />
                  <div className={'invalid-feedback'} />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className='col-6'>
              <div className="form-group">
                <label htmlFor="upload-image">Upload Image</label>
                <input 
                  type="file" 
                  name="image" 
                  ref="image" 
                  className="form-control-file" 
                  id="upload-image" 
                  onChange={e => this.handleBookCoversChange(e)}
                />
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
  item: PropTypes.object,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  saveItem: PropTypes.func.isRequired
}

export default injectIntl(ItemForm)
