// @flow

import * as React from 'react';
import idx from 'idx';
import css from 'styled-jsx/css';
import { Search } from '@kiwicom/orbit-components/lib/icons';
import { withRouter } from 'react-router-dom';

import Input from './../common/Input';
import { withUser } from '../context/User';
import FAQCategoryList from './FAQCategoryList';
import SearchAllFAQs from './SearchAllFAQs';
import ContentHeader from '../ContentHeader';
import type { User } from '../types';

const style = css`
  .static-faq {
    width: 480px;
  }
  .static-faq-body {
    padding: 24px 40px;
  }
`;

type Props = {|
  user: User,
  match: {
    params: {
      categoryId: ?string,
    },
  },
|};

type State = {|
  value: string,
|};

class StaticFAQ extends React.Component<Props, State> {
  state = {
    value: '',
  };

  handleSearchChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  handleCancelSearch = () => {
    this.setState({ value: '' });
  };

  renderInput = (isSearching: number) => (
    <Input
      value={this.state.value}
      onChange={this.handleSearchChange}
      placeholder="What can we help you with?"
      icon={<Search customColor="#bac7d5" />}
      onReset={isSearching ? this.handleCancelSearch : undefined}
    />
  );

  render() {
    const categoryId = idx(this.props.match, _ => _.params.categoryId) || null;
    const { value } = this.state;
    const isSearching = value.length;

    return (
      <div className="static-faq">
        {!this.props.user && <ContentHeader />}
        <div className="static-faq-body">
          {!categoryId && this.renderInput(isSearching)}
          {isSearching ? (
            <SearchAllFAQs search={value} />
          ) : (
            <FAQCategoryList categoryId={categoryId} />
          )}
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default withRouter(withUser(StaticFAQ));
