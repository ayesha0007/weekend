// import React, { useEffect, useState } from 'react';
// import { Container, Card, Spinner, Row, Col, Form } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Country = () => {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         const data = await response.json();
//         setCountries(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//         setLoading(false);
//       }
//     };

//     fetchCountries();
//   }, []);

//   // Filter countries based on the search term
//   const filteredCountries = countries.filter((country) =>
//     country.name?.common.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Container className="mt-5">
//       <h1 className="text-center mb-4">Countries Information</h1>
//       <Form className="mb-4">
//         <Form.Control
//           type="text"
//           placeholder="Search by country name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </Form>
//       {loading ? (
//         <div className="text-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : (
//         <Row>
//           {filteredCountries.map((country) => (
//             <Col key={country.cca3} md={4} className="mb-4">
//               <div className="img-box">
//                 <NavLink
//                   className="body-text text-dark text-decoration-none"
//                   to={`/countries/${country.cca3}`}
//                 >
//                   <Card>
//                     <Card.Img
//                       variant="top"
//                       src={country.flags?.png || 'https://via.placeholder.com/300x200'}
//                       alt={country.name?.common || 'Country Flag'}
//                       style={{
//                         height: '200px',
//                         objectFit: 'cover',
//                       }}
//                     />
//                     <Card.Body>
//                       <Card.Title className="text-center">
//                         {country.name?.common || 'N/A'}
//                       </Card.Title>
//                       <p>
//                         <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
//                       </p>
//                       <p>
//                         <strong>Currency:</strong>{' '}
//                         {country.currencies
//                           ? Object.values(country.currencies)
//                               .map((currency) => currency.name)
//                               .join(', ')
//                           : 'N/A'}
//                       </p>
//                       <p>
//                         <strong>Languages:</strong>{' '}
//                         {country.languages
//                           ? Object.values(country.languages).join(', ')
//                           : 'N/A'}
//                       </p>
//                     </Card.Body>
//                   </Card>
//                 </NavLink>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default Country;


import React, { useEffect, useState } from 'react';
import { Container, Card, Spinner, Row, Col, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name?.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Countries Information</h1>
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by country name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row>
          {filteredCountries.map((country) => (
            <Col key={country.cca3} md={4} className="mb-4">
              <div className="img-box">
                <NavLink
                  className="body-text text-dark text-decoration-none"
                  to={`/weather/${country.name?.common}`}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={country.flags?.png || 'https://via.placeholder.com/300x200'}
                      alt={country.name?.common || 'Country Flag'}
                      style={{
                        height: '200px',
                        objectFit: 'cover',
                      }}
                    />
                    <Card.Body>
                      <Card.Title className="text-center">
                        {country.name?.common || 'N/A'}
                      </Card.Title>
                      <p>
                        <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
                      </p>
                      <p>
                        <strong>Currency:</strong>{' '}
                        {country.currencies
                          ? Object.values(country.currencies)
                              .map((currency) => currency.name)
                              .join(', ')
                          : 'N/A'}
                      </p>
                      <p>
                        <strong>Languages:</strong>{' '}
                        {country.languages
                          ? Object.values(country.languages).join(', ')
                          : 'N/A'}
                      </p>
                    </Card.Body>
                  </Card>
                </NavLink>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Country;
