import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

//class기반의 컴포턴트에 도우미 메서드가 많아서 코드를 잘 구성할수 있기 때문에 class 로 변경함
class StreamCreate extends React.Component {
  // renderInput(formProps) {
  //   console.log(formProps);
  //   return (
  //     <input
  //       onChange={formProps.input.onChange}
  //       value={formProps.input.value}
  //     />
  //   );
  // }

  // 위와 같은 방식으로 속성을 하나하나 추가하지 않고
  // 아래의 방식으로하면 모든 속성을 한번에 꺼내서 추가한다.
  renderInput = ({ input, label, meta }) => {
    // this키워드를 인지하기 위해서 arrow 방식으로 변경함

    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} placeholder={label} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  onSubmit = (formValue) => {
    // console.log(formValue);
    // 더이상 event.preventDefault()를 사용할 필요가 없다.
    this.props.createStream(formValue);
  };

  render() {
    // console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

const fromWrapped = reduxForm({
  form: 'streamCreate',
  validate: validate,
})(StreamCreate);

export default connect(null, { createStream })(fromWrapped);
