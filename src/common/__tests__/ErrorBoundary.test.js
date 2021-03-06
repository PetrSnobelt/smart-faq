// @flow
import * as React from 'react';
import { mount } from 'enzyme';

import ErrorBoundary from '../ErrorBoundary';
import ComponentWithError from './helpers/ComponentWithError.ignore';

describe('ErrorBoundary', () => {
  it('should render normally', () => {
    const result = mount(
      <ErrorBoundary>
        <h1>This is not an error</h1>
      </ErrorBoundary>,
    );
    expect(result).toMatchSnapshot();
  });
  it('should throw an error', () => {
    const result = mount(
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>,
    );
    expect(result).toMatchSnapshot();
  });
});
