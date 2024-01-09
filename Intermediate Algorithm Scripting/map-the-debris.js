/*
 * FreeCodeCamp
 */

/**
 * Calculates the orbital period of a satellite based on its average altitude.
 *
 * @param {Array} data - An array of objects containing the name and average altitude of satellites.
 * @return {Array} An array of objects containing the name and orbital period of each satellite.
 */
const orbitalPeriod = (data) => {
  const earthRadius = 6367.4447;
  const gmEarth = 398600.4418;

  return data.map(({ name, avgAlt }) => ({
    name,
    orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(avgAlt + earthRadius, 3) / gmEarth)),
  }));
};

// Example data
const data = [
  { name: 'sputnik', avgAlt: 35873.5553 },
  { name: 'iss', avgAlt: 413.6 },
  { name: 'hubble', avgAlt: 556.7 },
  { name: 'moon', avgAlt: 378632.553 },
];

// Calculate orbital periods
const result = orbitalPeriod(data);

console.log(result);
