<template>
  <div class="map-container">
    <div ref="map" class="map"></div>

    <router-link class="messages-link" to="/mesagesScreen">
      
      <img class="messages-icon" src="./chat.png" alt="Messages" />
    </router-link>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import vehicleCoordinates from '@/assets/vehicleCoordinates.json'; // Import coordinates

export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = L.map(this.$refs.map).setView([-33.92, 18.58], 10); // Set initial map coordinates and zoom level

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(this.map);

      // Loop through vehicle coordinates and add markers with taxi icons and rotation
      vehicleCoordinates.forEach(coord => {
        const taxiIcon = L.icon({
          iconUrl: require('@/assets/ic_new_white_taxi.png'),
          iconSize: [38, 38],
          iconAnchor: [19, 19],
          popupAnchor: [0, -15],
          rotationAngle: parseFloat(coord.heading), // Set the rotation angle based on the heading
        });

        L.marker([parseFloat(coord.latitude), parseFloat(coord.longitude)], {
          icon: taxiIcon,
        }).addTo(this.map);
      });
    },
  },
};
</script>

<style>
.map-container {
  height: 100vh;
  width: 100%;
}

.map {
  height: 100%;
}

.messages-link {
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 1000; /* Ensure it's above the map */
  cursor: pointer;
  } 

  .messages-icon{
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 1000; /* Ensure it's above the map */
    width: 120px;
    cursor: pointer;
  }
</style>

