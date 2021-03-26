import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Checkbox } from '@chakra-ui/react';

const RentalsTable = ({ rentals }) => {
  // const [rented, setIsRented] = useState(true);
  // const [userId, setUserId] = useState(0);
  // const [rentalId, setRentalId] = useState(0);

  // useEffect(() => {
  //   const BASE_URL = 'https://afternoon-brushlands-40101.herokuapp.com/api';

  //   async function fetchData() {
  //     let response;
  //     if (rented) {
  //       response = await fetch(
  //         `${BASE_URL}/users/${userId}/rentals/${rentalId}`,
  //         {
  //           method: 'POST',
  //           body: JSON.stringify({
  //             rental: {
  //               movie_id: rentalId,
  //             },
  //           }),
  //         }
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //     } else {
  //       response = await fetch(
  //         `${BASE_URL}/users/${userId}/rentals/${rentalId}`,
  //         {
  //           method: 'DELETE',
  //         }
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //     }
  //   }

  //   fetchData();
  // }, [rentalId, rented, userId]);

  return (
    <Table variant="simple" gridArea="table">
      <Thead>
        <Tr>
          <Th>Movie Title</Th>
          <Th>Movie Director</Th>
          <Th>Movie Category</Th>
          <Th>Rented</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rentals.map(rental => {
          return (
            <Tr key={rental.id}>
              <Td>{rental.name}</Td>
              <Td>{rental.director}</Td>
              <Td>{rental.category.name}</Td>
              <Td>
                <Checkbox
                  defaultIsChecked
                  // onChange={e => {
                  //   // setUserId(rental.user.id);
                  //   // setRentalId(rental.id);
                  //   setIsRented(e.target.checked);
                  // }}
                />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default RentalsTable;
