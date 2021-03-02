import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  // componentDidMount에서 buildPlayer 가 정상적으로 실행되지 않았을 경우 한번더 buildPlayer실행을 시도한다.
  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    // this.player 가 이미 있다면 return으로 멈추고 없는 경우에만 buildPlayer() 실행됨
    // this.props.stream 이 없다면 무조건 return 으로 멈춤
    if (this.playe || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
    //this.player.play(); // 자동재생
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        {/* controls 는 default 값이 true이므로 아래의 코드와 같은 코드임
        <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />  */}
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
