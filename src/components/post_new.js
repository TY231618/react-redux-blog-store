import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { error } from 'util';

class PostNew extends React.Component {

  renderField(field) {

    //destructuring
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

    return (
      <div className={ className }>
        <label>{ field.label }</label>
        <input 
          className="form-control"
          type="text"
          { ...field.input }
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    )

  }

  onSubmit(values) {
    //this === component
    console.log(values);
  }

  render() {

    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field 
          label="Title"
          name="title"
          component={this.renderField}  
        />
        <Field 
          label="Categories"
          name="categories"
          component={this.renderField}  
        />
        <Field 
          label="Content"
          name="content"
          component={this.renderField}  
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {

  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a title';
  }

  if(!values.categories) {
    errors.categories = 'Enter a category';
  }

  if(!values.content) {
    errors.content = 'Please write some content';
  }

  //if errors empty form is fine to submit
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostNewForm'
})(PostNew);