<template>
  <div class="splash-container">
    <v-container fluid align="center">
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">
          <v-img src="@/assets/Quickloc8-logo.png" class="logo" contain></v-img>
        </v-col>
      </v-row>
    </v-container>

    <div class="splash-screen">
      <!-- Display the Quickloc8 logo -->
      <img src="@/assets/Quicloc8-logo.png" alt="Quickloc8 Logo" class="logo" />
      
      <!-- Implementing a pulsating effect using Quickloc8.svg -->
      <img v-if="showPulsatingEffect" src="@/assets/quickloc8.svg" alt="Pulsating Quickloc8 Logo" class="pulsating-logo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPulsatingEffect: true, 
    };
  },
  mounted() {
    setTimeout(() => {
      // Redirect to Map Screen after 3.5 seconds
      this.$router.push('/MapScreen');
    }, 3500); 

    // Hide pulsating effect after 3.5 seconds 
    if (this.showPulsatingEffect) {
      setTimeout(() => {
        this.showPulsatingEffect = false;
      }, 3500);
    }
  },
};
</script>

<style scoped>

/* Centering the logo */
.logo {
  max-width: 300px;
}

/* Styling the container */
.splash-container {
  height: 100vh; 
  background-color: #fff; 
}

/* Style the splash screen */
.splash-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Styling the pulsating effect (if implemented) */
.pulsating-logo {
  width: 300px; 
  height: auto;
  animation: pulse 1.5s infinite;
}

/*CSS animation for pulsating effect */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>