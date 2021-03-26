import React, { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';

import UsersTable from '../components/UsersTable';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const BASE_URL = 'http://localhost:3000/api';
    // const BASE_URL = 'https://afternoon-brushlands-40101.herokuapp.com/api';

    async function fetchData() {
      const response = await fetch(`${BASE_URL}/users`);
      const data = await response.json();
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Heading gridArea="title" as="h2" size="lg" my={5} marginLeft={10}>
        Users
      </Heading>
      <UsersTable users={users} />
    </div>
  );
};

export default Users;
