import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';

import RentalsTable from '../components/RentalsTable';

const UserRentals = () => {
  let { id } = useParams();

  const [currentUserRentals, setCurrentUserRentals] = useState([]);

  useEffect(() => {
    const BASE_URL = 'https://afternoon-brushlands-40101.herokuapp.com/api';

    async function fetchData() {
      const response = await fetch(`${BASE_URL}/users/${id}/rentals`);
      const data = await response.json();
      setCurrentUserRentals(data);
    }
    fetchData();
  }, [id]);

  return (
    <Box>
      {currentUserRentals.length > 0 ? (
        <div>
          <Heading as="h2" size="lg" my={5} marginLeft={10}>
            {currentUserRentals[0].user.name} rented:
          </Heading>
          <div>
            <RentalsTable rentals={currentUserRentals} />
          </div>
        </div>
      ) : (
        <Box p={10}>
          <Text fontSize="xl">This user has no rentals yet</Text>
        </Box>
      )}
    </Box>
  );
};

export default UserRentals;
