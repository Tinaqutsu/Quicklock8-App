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
      
      <!-- Optional: Implement a pulsating effect using Quickloc8.svg -->
      <img v-if="showPulsatingEffect" src="@/assets/quickloc8.svg" alt="Pulsating Quickloc8 Logo" class="pulsating-logo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPulsatingEffect: true, // Set to false if not implementing the pulsating effect
    };
  },
  mounted() {
    setTimeout(() => {
      // Redirect to Map Screen after 3.5 seconds
      this.$router.push('/MapScreen');
    }, 3500); // Wait for 3.5 seconds

    // Hide pulsating effect after 3.5 seconds (if implemented)
    if (this.showPulsatingEffect) {
      setTimeout(() => {
        this.showPulsatingEffect = false;
      }, 3500);
    }
  },
};
</script>

<style scoped>
/* Custom styles for SplashScreen.vue */

/* Centering the logo */
.logo {
  max-width: 300px; /* Adjust as needed */
}

/* Styling for the container */
.splash-container {
  height: 100vh; /* Make the container take the full viewport height */
  background-color: #fff; /* Example background color */
}

/* Style for the splash screen */
.splash-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Style for the optional pulsating effect (if implemented) */
.pulsating-logo {
  width: 300px; /* Adjust the size as needed */
  height: auto;
  animation: pulse 1.5s infinite;
}

/* Optional: CSS animation for pulsating effect */
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


<!-- <template>
  <div class="splash-container">
    <v-container fluid align="center">
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">
          <v-img src="@/assets/Quickloc8-logo.png" class="logo" contain></v-img>
        </v-col>
      </v-row>
    </v-container>

    <div class="splash-screen">
      Display the Quickloc8 logo 
      <img src="@/assets/Quicloc8-logo.png" alt="Quickloc8 Logo" class="logo" />
      
      Optional: Implement a pulsating effect using Quickloc8.svg 
      <img v-if="showPulsatingEffect" src="@/assets/quickloc8.svg" alt="Pulsating Quickloc8 Logo" class="pulsating-logo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPulsatingEffect: true, // Set to false if not implementing the pulsating effect
    };
  },
  mounted() {
    setTimeout(() => {
      // Redirect to Page 2 after 3.5 seconds
      this.$router.push('/page2');
    }, 3500); // Wait for 3.5 seconds

    // Hide pulsating effect after 3.5 seconds (if implemented)
    if (this.showPulsatingEffect) {
      setTimeout(() => {
        this.showPulsatingEffect = false;
      }, 3500);
    }
  },
};
</script>

<style scoped>
/* Custom styles for SplashScreen.vue */

/* Centering the logo */
.logo {
  max-width: 300px; /* Adjust as needed */
}

/* Styling for the container */
.splash-container {
  height: 100vh; /* Make the container take the full viewport height */
  background-color: #fff; /* Example background color */
}

/* Style for the splash screen */
.splash-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Style for the optional pulsating effect (if implemented) */
.pulsating-logo {
  width: 300px; /* Adjust the size as needed */
  height: auto;
  animation: pulse 1.5s infinite;
}

/* Optional: CSS animation for pulsating effect */
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
</style> -->




<!-- <template>
  <div class="splash-screen">
    Display the Quickloc8 logo
    <img src="@/assets/Quicloc8-logo.png" alt="Quickloc8 Logo" class="logo" />
    
    Optional: Implement a pulsating effect using Quickloc8.svg 
    <img v-if="showPulsatingEffect" src="@/assets/quickloc8.svg" alt="Pulsating Quickloc8 Logo" class="pulsating-logo" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPulsatingEffect: true, // Set to false if not implementing the pulsating effect
    };
  },
  mounted() {
    // Hide pulsating effect after 3.5 seconds (if implemented)
    if (this.showPulsatingEffect) {
      setTimeout(() => {
        this.showPulsatingEffect = false;
      }, 3500);
    }
  },
};
</script>

<style>
/* Style for the splash screen */
.splash-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Style for the Quickloc8 logo */
.logo {
  width: 200px; /* Adjust the size as needed */
  height: auto;
}

/* Style for the optional pulsating effect (if implemented) */
.pulsating-logo {
  width: 300px; /* Adjust the size as needed */
  height: auto;
  animation: pulse 1.5s infinite;
}

/* Optional: CSS animation for pulsating effect */
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
</style> -->
