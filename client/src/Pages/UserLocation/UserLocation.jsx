// index.jsx
import React from 'react';
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export const UserLocation = () => {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(firebaseApp);

  // Define a callback function that will be executed when the Google Maps API is loaded
  const initMap = () => {
    // Create a map object
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: {lat: -33.8666, lng: 151.1958},
    });

    // Add a marker to the map
    const marker = new google.maps.Marker({
      map: map,
      // Define the place with a location and a query string.
      place: {
        location: {lat: -33.8666, lng: 151.1958},
        query: 'Google, Sydney, Australia'
      },
      // Attributions help users find your site again.
      attribution:
        'Source: Google Maps JavaScript API',
      webUrl:
        '[19](https://developers.google.com/maps/)',
    });

    // Construct a new InfoWindow.
    const infoWindow = new google.maps.InfoWindow({
      content: 'Google Sydney',
    });

    // Opens the InfoWindow when marker is clicked.
    marker.addListener('click', function () {
      infoWindow.open(map, marker);
    });
  };

  // Use useEffect hook to load the Google Maps API and call the initMap function
  useEffect(() => {
    window.initMap = initMap;
  }, []);

  return (
    <div className="App">
      <h1>Geolocation Example</h1>
      <div id="map"></div>
    </div>
  );
};


