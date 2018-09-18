// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Alert } from '@kiwicom/orbit-components';
import { Close } from '@kiwicom/orbit-components/lib/icons';

import screenList from './screenList';
import { Box } from '../../common';

type Props = {|
  changeScreen: (nextScreen: string) => void,
|};

const style = css`
  div.feedbackMessage {
    padding: 32px 24px;
  }
  div.closeIcon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`;
const ScreenError = ({ changeScreen }: Props) => {
  return (
    <Box border="none" borderRadius="4px" backgroundColor="#f5f7f9">
      <div className="feedbackMessage">
        <div
          className="closeIcon"
          onClick={() => changeScreen(screenList.VOTING)}
          onKeyUp={null}
          tabIndex="-1"
          role="button"
        >
          <Close customColor="#bac7d5" size="small" />
        </div>
        <Alert type="warning" icon>
          Our bad. We weren&apos;t able to send your feedback. But, follow the
          link below to drop us a line.
        </Alert>
        <style jsx>{style}</style>
      </div>
    </Box>
  );
};

export default ScreenError;
