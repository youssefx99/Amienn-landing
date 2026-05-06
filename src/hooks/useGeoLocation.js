import { useState, useEffect } from 'react';
import { getImagesByRegion, REGIONS } from '../config/images';

/**
 * Custom hook for detecting user's geographic location
 * Uses ip-api.com for geolocation (free, no API key required)
 *
 * @returns {object} { countryCode, images, isLoading, error }
 */
export default function useGeoLocation() {
  const [state, setState] = useState({
    countryCode: null,
    images: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    const detectLocation = async () => {
      try {
        // Check if we have cached location data (session storage for performance)
        const cachedLocation = sessionStorage.getItem('userGeoLocation');

        if (cachedLocation) {
          const { countryCode } = JSON.parse(cachedLocation);
          setState({
            countryCode,
            images: getImagesByRegion(countryCode),
            isLoading: false,
            error: null,
          });
          return;
        }

        // Fetch location from IP-based geolocation API
        const response = await fetch('https://ipapi.co/json/', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch location');
        }

        const data = await response.json();
        console.log('Geolocation API response:', data); // Debug log
        const countryCode = data.country_code || REGIONS.DEFAULT;

        // Cache the result for the session
        sessionStorage.setItem(
          'userGeoLocation',
          JSON.stringify({ countryCode })
        );

        setState({
          countryCode,
          images: getImagesByRegion(countryCode),
          isLoading: false,
          error: null,
        });
      } catch (error) {
        // On error, use default images (don't block the UI)
        if (error.name !== 'AbortError') {
          console.warn(
            'Geolocation detection failed, using default images:',
            error.message
          );
          setState({
            countryCode: REGIONS.DEFAULT,
            images: getImagesByRegion(REGIONS.DEFAULT),
            isLoading: false,
            error: error.message,
          });
        }
      }
    };

    detectLocation();

    return () => {
      controller.abort();
    };
  }, []);

  return state;
}
