import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import UserProfileLink from '..//UserProfileLink';
import cheerio from "cheerio";
import should from "should";

let renderToCheerio = function(element, props = {}, children = null) {
  let html = React.renderToStaticMarkup(
    React.createElement(element, props, children));
  return cheerio.load(html);
};

describe('UserProfileLink', () => {

  beforeEach(() => {
  });

  it('should render link', () => {
    let props = {
      linkUrl: 'http://myprofile',
      linkText: 'My Profile'
    };

    let $el = renderToCheerio(UserProfileLink, props);

    $el("a").text().should.eql("My Profile2");
  });

});