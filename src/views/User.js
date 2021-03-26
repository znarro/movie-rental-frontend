import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RentalsTable from '../components/RentalsTable';

const UserRentals = () => {
  let { id } = useParams();

  const [currentUserRentals, setCurrentUserRentals] = useState([]);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const BASE_URL = 'https://afternoon-brushlands-40101.herokuapp.com/api';

    async function fetchData() {
      const response = await fetch(`${BASE_URL}/users/${id}/rentals`);
      const data = await response.json();
      //   console.log(data);
      setCurrentUserRentals(data);
      setCurrentUser(data[0].user.name);
    }
    fetchData();
  }, [id]);

  //   console.log(currentUserRentals);

  //   const currentUser = currentUserRentals[0].user.name;

  return (
    <div>
      <h3>{currentUser} rented:</h3>
      <div>
        {currentUserRentals && <RentalsTable rentals={currentUserRentals} />}
      </div>
    </div>
  );
};

export default UserRentals;
