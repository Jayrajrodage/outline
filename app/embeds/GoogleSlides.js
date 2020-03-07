// @flow
import * as React from 'react';
import Frame from './components/Frame';

const URL_REGEX = new RegExp(
  '^https?://docs.google.com/presentation/d/(.*)/pub(.*)$'
);

type Props = {
  url: string,
};

export default class GoogleSlides extends React.Component<Props> {
  static ENABLED = [URL_REGEX];

  render() {
    return (
      <Frame
        src={this.props.url.replace('/pub', '/embed')}
        title="Google Slides Embed"
        border
      />
    );
  }
}
