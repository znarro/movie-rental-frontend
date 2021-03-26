import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const RentalsTable = ({ rentals }) => {
  return (
    <Table variant="simple" gridArea="table">
      <Thead>
        <Tr>
          <Th>Movie Title</Th>
          <Th>Movie Director</Th>
          <Th>Movie Category</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rentals.map(rental => {
          return (
            <Tr key={rental.id}>
              <Td>{rental.name}</Td>
              <Td>{rental.director}</Td>
              <Td>{rental.category.name}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default RentalsTable;
