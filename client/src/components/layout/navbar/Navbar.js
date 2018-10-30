import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { isMobile } from "react-device-detect";

import TwitterLogin from "react-twitter-auth";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";


import "./navbar.css";

class Navbar extends Component {
  twitterResponse(e) {
    console.log("loga com twitter");
    //this.props.twitterResponse();
  }

  facebookResponse(e) {
    console.log("loga com facebook");
    //this.props.facebookResponse();
  }

  googleResponse(e) {
    console.log("loga com google");
    //this.props.googleResponse();
  }

  onFailure = error => {
    alert(error);
  };

  onSignOut(e) {
    e.preventDefault();

    this.props.logoutUser();
  }

  render() {
    let linkCompartilhamento = "www.vozativa.org/";
    let textoCompartilhamento =
      "Nos diga o que você defende e em oito minutos a gente apresenta candidatos alinhados com você. " +
      linkCompartilhamento;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                src={require("../../../data/img/logo.png")}
                alt="Voz Ativa"
                width="100px"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mainNavbar"
              aria-expanded="false"
              aria-label="Menu"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav ml-auto pr-3">
                <li className="nav-item">
                  <Link to="/sobre" className="nav-link">
                    Sobre
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/soucandidato" className="nav-link">
                    Sou candidato
                  </Link>
                </li>
                <li className="nav-item">
                  <GoogleLogin
                    className="login"
                    clientId="XXXXXXXXXX"
                    buttonText="Google"
                    onSuccess={this.googleResponse}
                    onFailure={this.googleResponse}
                  >
                    <a
                      data-show-count="false"
                      className="nav-link nav-strong"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon-google share-icon" />
                    </a>
                  </GoogleLogin>
                </li>

                <li className="nav-item">
                  <FacebookLogin
                    className="login"
                    appId="XXXXXXXXXX"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.facebookResponse}
                  >
                    <a
                      data-show-count="false"
                      className="nav-link nav-strong"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon-facebook share-icon" />
                    </a>
                  </FacebookLogin>
                </li>

                <li className="nav-item">
                  <TwitterLogin
                    className="login"
                    loginUrl="http://localhost:4000/api/v1/auth/twitter"
                    onFailure={this.twitterResponse}
                    onSuccess={this.twitterResponse}
                    requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
                  >
                    <a
                      data-show-count="false"
                      className="nav-link nav-strong"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon-twitter share-icon" />
                    </a>
                  </TwitterLogin>
                </li>
              </ul>
              <span className="navbar-text navbar-text-strong">
                compartilhe
              </span>
              <ul className="navbar-nav navbar-inline">
                <li className="nav-item">
                  <a
                    href={
                      "https://twitter.com/intent/tweet/?text=" +
                      textoCompartilhamento
                    }
                    data-show-count="false"
                    className="nav-link nav-strong"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-twitter share-icon" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href={
                      "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fvozativa.org%2F&amp;src=sdkpreparse"
                    }
                    data-show-count="false"
                    className="nav-link nav-strong"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-facebook share-icon" />
                  </a>
                </li>
                {!isMobile && (
                  <li className="nav-item">
                    <a
                      href={
                        "https://web.whatsapp.com/send?text=" +
                        textoCompartilhamento
                      }
                      data-show-count="false"
                      className="nav-link nav-strong"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon-zapzap share-icon" />
                    </a>
                  </li>
                )}
                {isMobile && (
                  <li className="nav-item">
                    <a
                      href={"whatsapp://send?text=" + textoCompartilhamento}
                      className="nav-link"
                    >
                      <span className="icon-zapzap share-icon" />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Navbar);
