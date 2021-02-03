import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

//class기반의 컴포턴트에 도우미 메서드가 많아서 코드를 잘 구성할수 있기 때문에 class 로 변경함
class StreamCreate extends React.Component {
  onSubmit = (formValue) => {
    // console.log(formValue);
    // 더이상 event.preventDefault()를 사용할 필요가 없다.
    this.props.createStream(formValue);
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
