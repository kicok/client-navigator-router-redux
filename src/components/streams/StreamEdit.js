import React from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import { fetchStream, editStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    // 현재 페이지를 즐겨찾기 하거나 새로고침할때 독립적인 data 확보를 위해 값을 서버에서 가져와 state.streams 를 만든다.
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.editStream(formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={this.props.stream}
          // initialValues 속성을 이용하여 reduxForm의 초기값을 전달하여 화면에 보여줄수 있다.
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    // state.streams 는 목록페이지(http://localhost:3000/)에서 만들어질수도 있고
    // 아니면 componentDidMount 의 this.props.fetchStream(..) 에서  state.streams 가 만들어 질수 있음.
  };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
