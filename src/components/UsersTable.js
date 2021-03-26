import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td, Link } from '@chakra-ui/react';

const UsersTable = ({ users }) => {
  return (
    <Table variant="simple" gridArea="table">
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>See rentals</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map(user => {
          return (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>
                <Link as={RouterLink} to={`/users/${user.id}`}>
                  Link
                </Link>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default UsersTable;
