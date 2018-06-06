// @flow

import * as React from 'react';

type Props = {|
  children: React.Node,
  styles?: string,
  dataCy?: string,
|};

const ScrollableContent = (props: Props) => (
  <div className="scrollable-content" data-cy={props.dataCy}>
    {props.children}
    <style jsx>
      {`
        .scrollable-content {
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          ${props.styles ? props.styles : ''};
        }
      `}
    </style>
  </div>
);

export default ScrollableContent;