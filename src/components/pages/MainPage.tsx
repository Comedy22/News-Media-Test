import React from 'react';
import NewsList from '../UI/NewsList';

function MainPage(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <h1>Random News</h1>
      <NewsList />
    </div>
  );
}

export default MainPage;
