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

          // chrome의 콘솔창에서 gapi.auth2.getAuthInstance().isSignedIn 을 입력하면 __proto__ 내에 listen: ƒ (a) 을 통해서 들을수 있다.
          this.auth.isSignedIn.listen(this.onAuthChange);

          //isSignedIn.get() 로그인 여부를 boolean 으로 리턴
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
