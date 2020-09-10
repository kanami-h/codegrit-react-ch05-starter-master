import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import ThemeSwitcher from './ThemeSwitcher';
import CardSwitcher from './CardSwitcher'
import { ReactComponent as LoadingImg } from '../images/loading.svg';
import { fetchData } from '../CardDataUtils';
import styled from '@emotion/styled';


const InstaCard = styled.article({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '614px',
  width: '100%',
  border: '1px solid #e6e6e6',
  borderRadius: '5px',
},({ theme }) => {
  let darkMode = []
  if(theme === 'dark') {
    darkMode.push({ backgroundColor: '#262626', color: '#999' })
  }
  return darkMode;
})

const EmptyBox = () => {
  const loaderWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  }
  return (
    <InstaCard>
      <div css={loaderWrapperStyle}>
        <LoadingImg />
      </div>
    </InstaCard>
  );
}

export default class extends Component {
  state = {
    theme: 'light',
    loading: true,
    loadedOnce: false,
    data: null,
    chosenId: 1
  }

  componentDidMount() {
    fetchData().then((data) => {
      this.setState({ loading: false, data })
    })
  }

  onSwitchTheme = (theme, e = null) => {
    if (e) e.preventDefault();
    this.setState({ theme })
  }

  onSwitchCard = (id, e = null) => {
    if (e) e.preventDefault();
    const { data } = this.state;
    if (!data || data.id === id) return
    this.setState({
      loading: true,
      chosenId: id,
    })
    fetchData(id).then((data) => {
      this.setState({ 
        loading: false, data,
        loadedOnce: true
      })
    })
  }

  render() {
    const { 
      theme, 
      loading, 
      data, 
      chosenId, 
      loadedOnce 
    } = this.state;
    let instaCardClass = "insta-card";
    let articlePart;
    if (theme === 'dark') {
      instaCardClass = "insta-card insta-card-dark"
    }
    if (loading && loadedOnce === false) {
      articlePart = <EmptyBox />;
    } else {
      articlePart = (
        <InstaCard theme={theme}>
          <Header theme={theme} data={data} />
          <Body theme={theme} data={data} chosenId={chosenId} />
        </InstaCard>
      );
    }
    return (
      <div className="card-wrapper">
        <div style={{ marginBottom: 7 }}>
          <p>- テーマを選択してください。</p>
          <ThemeSwitcher 
            theme={theme}
            switchTheme={this.onSwitchTheme} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <p>- 表示するカードを選択してください。</p>
          <CardSwitcher id={chosenId} switchCard={this.onSwitchCard} />
        </div>
        {articlePart}
      </div>
    );
  }
}