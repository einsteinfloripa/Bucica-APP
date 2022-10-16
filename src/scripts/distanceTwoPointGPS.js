export function distanceTwoPointGPS(lat1, lon1) {
  const R = 6371; // Radius of the earth in km
  const lat2 = -27.598966; // Latitude of the Classroom
  const lon2 = -48.5175770; // Longitude of the Classroom
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  const dM = d * 1000; // Distance in m
  return dM;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
