import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} placeholder={label} />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
