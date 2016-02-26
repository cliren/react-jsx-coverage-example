import React from 'react';

const additionalProps = {value: "test"};
let UserProfileLink = React.createClass({
  render(){

    return (
      <a href={this.props.linkUrl} {...additionalProps}>{this.props.linkText}</a>
    );
  }
});

export default UserProfileLink;
