import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id); // state 에 stream 생성(새로고침하거나 주소로 바로 들어올때 필요)
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <>
        {this.props.stream && (
          <button
            onClick={() => this.props.deleteStream(id)}
            className="ui button negative"
          >
            Delete
          </button>
        )}
        <Link to="/" className="ui button">
          {this.props.stream ? 'Cancel' : 'Ok'}
        </Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'No Stream for Delete';
    }

    return `Are you sure you want to delete this stream with title : ${this.props.stream.title}? `;
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
