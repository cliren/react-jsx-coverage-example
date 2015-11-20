import React from 'react';

class UserProfileLink extends React.Component {

  render() {
    return (
      <a href={this.props.linkUrl}>{this.props.linkText}</a>
    );
  }
}

UserProfileLink.propTypes = {
  linkUrl: React.PropTypes.string.isRequired,
  linkText: React.PropTypes.string.isRequired
};

export default UserProfileLink;
