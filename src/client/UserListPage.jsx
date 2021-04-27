import React, { useEffect, useState } from 'react';

export function UserListPage() {
  const [users, setUsers] = useState();
  const [error, setError] = useState();

  async function loadUsers() {
    try {
      const res = await fetch('/api/users');
      if (!res.ok) {
        throw new Error(`Something went wrong loading ${res.url}: ${res.statusText}`);
      }

      const json = await res.json();
      setUsers(json);
    } catch (e) {
      setError(e);
    }
  }

  useEffect(loadUsers, []);

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (!users) {
    return <div>...Loading...</div>;
  }

  return <>
    <h1>List users</h1>
    {users.map(({id, firstname, lastname, email}) => (
      <ul key={id}>
        <li key={id}>First name: {firstname}</li>
        <li key={id}>Last name: {lastname}</li>
        <li key={id}>Email: {email}</li>
      </ul>
    ))}
  </>;
}