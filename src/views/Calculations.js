// Function to calculate the intersection point of three circles (trilateration)
function trilaterate(tower1, tower2, tower3) {
    const x1 = tower1.longitude;
    const y1 = tower1.latitude;
    const r1 = tower1.range;
  
    const x2 = tower2.longitude;
    const y2 = tower2.latitude;
    const r2 = tower2.range;
  
    const x3 = tower3.longitude;
    const y3 = tower3.latitude;
    const r3 = tower3.range;
  
    const A = 2 * (x2 - x1);
    const B = 2 * (y2 - y1);
    const C = Math.pow(r1, 2) - Math.pow(r2, 2) - Math.pow(x1, 2) + Math.pow(x2, 2) - Math.pow(y1, 2) + Math.pow(y2, 2);
    const D = 2 * (x3 - x2);
    const E = 2 * (y3 - y2);
    const F = Math.pow(r2, 2) - Math.pow(r3, 2) - Math.pow(x2, 2) + Math.pow(x3, 2) - Math.pow(y2, 2) + Math.pow(y3, 2);
  
    const x = (C * E - F * B) / (E * A - B * D);
    const y = (C * D - A * F) / (B * D - A * E);
  
    return { latitude: y, longitude: x };
  }
  
  // Given tower information
  const tower1 = { latitude: -25.757999, longitude: 28.201021, range: 1000 };
  const tower2 = { latitude: -25.75813293457, longitude: 28.201217651367, range: 1000 };
  const tower3 = { latitude: -25.757912, longitude: 28.201139, range: 5607 };
  
  // Calculate the intersection point
  const intersection = trilaterate(tower1, tower2, tower3);
  
  console.log('Approximate Position:', intersection);
  