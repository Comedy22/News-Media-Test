import React from 'react';
import NewsList from '../UI/NewsList';

function MainPage(): JSX.Element {
  return (
    <div style={{ padding: '20px' }}>
      <h1>News</h1>
      <NewsList />
    </div>
  );
}

export default MainPage;
