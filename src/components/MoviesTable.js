import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const MoviesTable = ({ movies }) => {
  return (
    <Table variant="simple" gridArea="table">
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Title</Th>
          <Th>Director</Th>
          {/* <Th>Rented by</Th> */}
        </Tr>
      </Thead>
      <Tbody>
        {movies.map(movie => {
          return (
            <Tr key={movie.id}>
              <Td>{movie.id}</Td>
              <Td>{movie.name}</Td>
              <Td>{movie.director}</Td>
              {/* <Td>{rented}</Td> */}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default MoviesTable;
