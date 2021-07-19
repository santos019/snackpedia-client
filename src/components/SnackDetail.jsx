import React, { Component } from "react";

class SnackDetail extends Component {
  componentDidMount() {
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { state } = this.props.location;

    if (state === undefined) {
      return null;
    } else {
      return (
        <div>
          <h1>{state.id}</h1>
          <img src={state.image} alt="snack"></img>
        </div>
      );
    }
  }
}

export default SnackDetail;
