import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }; // 로그인 여부를 알수 없으므로 null로 초기화
  componentDidMount() {
    // gapi는 브라우저 쪽 자바스크립트를 위한 구글 클라이언트 라이브러리
    // 구글 로그인, 드라이브등 api를 쉽게 연결할수 있도록 도와줌.
    // https://developers.google.com/identity/sign-in/web/reference
    // https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#example
    // https://github.com/google/google-api-javascript-client
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '223317796916-vuor59kgri5lf2vk587m6th2jr1jla7b.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          console.log(this.state.isSignedIn);
          console.log(this.auth);

          //isSignedIn.get() 로그인 여부를 boolean 으로 리턴
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
