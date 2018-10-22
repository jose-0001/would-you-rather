import React, { Component } from "react";
import CardStats from "./CardStats";

class LeaderStats extends Component {
  render() {
    const { avatarURL, name, answeredQs, createdQs } = this.props;
    return (
      <CardStats
        name={name}
        avatarURL={avatarURL}
        answeredQs={answeredQs}
        createdQs={createdQs}
      />
    );
  }
}

export default LeaderStats;
