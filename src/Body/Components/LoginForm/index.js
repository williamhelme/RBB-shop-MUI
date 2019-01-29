import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import fb, { auth, AuthProvider } from "../../../config/firebaseConfig";
// import $ from "jquery";

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="24"
    height="24"
    viewBox="0 0 48 48"
    style={{ fill: "#000000" }}
  >
    <g id="surface1">
      <path
        style={{ fill: "#FFC107" }}
        d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 33.652344 32.65625 29.222656 36 24 36 C 17.371094 36 12 30.628906 12 24 C 12 17.371094 17.371094 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 12.953125 4 4 12.953125 4 24 C 4 35.046875 12.953125 44 24 44 C 35.046875 44 44 35.046875 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z "
      />
      <path
        style={{ fill: "#FF3D00" }}
        d="M 6.304688 14.691406 L 12.878906 19.511719 C 14.65625 15.109375 18.960938 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 16.316406 4 9.65625 8.335938 6.304688 14.691406 Z "
      />
      <path
        style={{ fill: "#4CAF50" }}
        d="M 24 44 C 29.164063 44 33.859375 42.023438 37.410156 38.808594 L 31.21875 33.570313 C 29.210938 35.089844 26.714844 36 24 36 C 18.796875 36 14.382813 32.683594 12.71875 28.054688 L 6.195313 33.078125 C 9.503906 39.554688 16.226563 44 24 44 Z "
      />
      <path
        style={{ fill: "#1976D2" }}
        d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 34.511719 30.238281 33.070313 32.164063 31.214844 33.570313 C 31.21875 33.570313 31.21875 33.570313 31.21875 33.570313 L 37.410156 38.808594 C 36.972656 39.203125 44 34 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z "
      />
    </g>
  </svg>
);

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSignIn = this.handleSignIn.bind(this);
  }
  componentDidMount() {
    const that = this;

    this.authListener = auth.onAuthStateChanged(user => {
      if (user) {
        const profile = fb.auth().currentUser;

        profile
          .getIdTokenResult()
          .then(idToken => {
            // Parse the ID token.
            profile.isAdmin = idToken && idToken.claims && idToken.claims.admin;
          })
          .catch(error => {
            console.log(error);
            profile.isAdmin = false;
          })
          .finally(() => {
            that.setState({
              user: profile,
              handlingLogin: false,
              loggedIn: true
            });
          });
      }
    });
  }

  componentWillUnmount() {
    this.authListener && this.authListener();
    this.authListener = null;
  }

  signIn() {
    auth
      .signInWithPopup(AuthProvider)
      .then(result => {
        return result.user.getIdToken();
      })
      // .then(this.processCustomClaims.bind(this))
      .catch(error => {
        console.log(error);
      });
  }

  // Use this if production requires data setup without access to cloud functions.
  // Don't flood the token with attributes though.

  // processCustomClaims(idToken) {
  //   // Pass the ID token to the server.
  //   $.post(
  //     "http://localhost:8000/setCustomClaims",
  //     {
  //       idToken: idToken
  //     },
  //     (data, status) => {
  //       if (status == "success" && data) {
  //         const json = JSON.parse(data);
  //         if (json && json.status == "success") {
  //           // Force token refresh. The token claims will contain the additional claims.
  //           fb.auth().currentUser.getIdToken(true);
  //         }
  //       }
  //     }
  //   );
  // }

  signOut() {
    auth.signOut().then(
      () => {
        this.setState({
          loggedOut: true,
          handlingLogin: false,
          loggedIn: false
        });
      },
      function(error) {
        console.error("Sign Out Error", error);
      }
    );
  }

  handleSignIn(e) {
    e.preventDefault();

    if (!this.state.loggedIn) {
      this.signIn();
    } else {
      this.signOut();
    }
  }

  loggedIn() {
    const { displayName, photoURL, email } = this.state.user;
    return (
      <div>
        <div style={{ display: "inline-block", verticalAlign: "top" }}>
          <span>
            Logged in as <span>{displayName}</span>{" "}
          </span>
          <div
            style={{ fontSize: "smaller", opacity: "0.9", paddingRight: 7 }}
          >{`(${email})`}</div>
        </div>
        <div style={{ display: "inline-block" }}>
          <img
            src={photoURL}
            alt={"user profile"}
            height={50}
            style={{ borderRadius: "50%", verticalAlign: "center" }}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ position: "absolute", width: "100%" }}>
        {this.state.loggedOut && <div>You are now logged out</div>}
        {this.state.handlingLogin && <div>Logging in...</div>}
        {this.state.loggedIn && this.loggedIn()}
        <Button
          style={{ backgroundColor: "white" }}
          variant="outlined"
          onClick={this.handleSignIn}
        >
          <GoogleIcon />
          <div style={{ paddingLeft: 10 }}>
            {!this.state.loggedIn ? "Login" : "Logout"}
          </div>
        </Button>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onProfileChange: PropTypes.func.isRequired
};

export default LoginForm;