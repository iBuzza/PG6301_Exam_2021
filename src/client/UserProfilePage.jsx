import React from 'react';
import { useLoading } from './UseLoadingPage';
import { fetchJson } from './http';



  
function ErrorView(error ) {
  return <div>An error occured:  {error.toString()}</div>
}

function LoadingView() {
  return <div>Loading...</div>;
}

export function UserProfile() {
  const [loading, error, data ] = useLoading(() => fetchJson('/api/profile'));

  if(loading || !data) {
    return <LoadingView />;
  }

  if(Error) {
    return <ErrorView error={error}/> 
  }

  const {username} = data; 

  return <div>
    <h1>Username: {username}</h1>
  </div>;
}