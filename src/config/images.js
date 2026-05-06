/**
 * Image configuration based on geographic regions
 * Centralized image management for location-based content
 */

export const REGIONS = {
  EGYPT: 'EG',
  DEFAULT: 'DEFAULT',
};

/**
 * Image sets for different components based on region
 */
export const imagesByRegion = {
  [REGIONS.EGYPT]: {
    hero: '/egyptain family2.jpg',
    preFooter: '/egyptain family.jpg',
  },
  [REGIONS.DEFAULT]: {
    hero: '/family.jpg',
    preFooter: '/family4.jpg',
  },
};

/**
 * Get images for a specific region
 * @param {string} countryCode - ISO country code (e.g., 'EG', 'US')
 * @returns {object} Image paths for the region
 */
export const getImagesByRegion = (countryCode) => {
  if (countryCode === REGIONS.EGYPT) {
    return imagesByRegion[REGIONS.EGYPT];
  }
  return imagesByRegion[REGIONS.DEFAULT];
};
