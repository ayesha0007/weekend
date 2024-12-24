import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Card } from 'react-bootstrap';
import axios from 'axios';
import Banner from '../../components/Common/Header/Banner/Banner';

const Weather = () => {
    const { countryName } = useParams();
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiKey = 'd583b36433d6226b914c3a804e7df7d5'; // Replace with your OpenWeatherMap API key

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // Fetching weather data using the capital city of the country
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}&units=metric`
                );
                setWeatherData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setLoading(false);
            }
        };

        fetchWeather();
    }, [countryName]);

    return (
        <>
        <Banner/>
            <Container className="mt-5">
                {loading ? (
                    <div className="text-center">
                        <Spinner animation="border" variant="primary" />
                    </div>
                ) : weatherData ? (
                    <Card>
                        <Card.Body>
                            <Card.Title>{weatherData.name} Weather</Card.Title>
                            <p>
                                <strong>Temperature:</strong> {weatherData.main.temp}°C
                            </p>
                            <p>
                                <strong>Weather:</strong> {weatherData.weather[0].description}
                            </p>
                            <p>
                                <strong>Humidity:</strong> {weatherData.main.humidity}%
                            </p>
                            <p>
                                <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
                            </p>
                        </Card.Body>
                    </Card>
                ) : (
                    <p>Weather data not available.</p>
                )}
            </Container>
        </>
    );
};

export default Weather;
