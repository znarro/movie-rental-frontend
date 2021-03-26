import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const UsersTable = ({ users }) => {
  return (
    <Table variant="simple" gridArea="table">
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          {/* <Th>Rented by</Th> */}
        </Tr>
      </Thead>
      <Tbody>
        {users.map(user => {
          return (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              {/* <Td>{rented}</Td> */}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default UsersTable;
