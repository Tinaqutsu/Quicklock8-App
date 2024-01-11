[2:10 PM] Vuyolwethu Mabhuleka
<template>
  <div class="messages-container">
    <h1 align="center" justify="center">Messages</h1>
    <div v-for="(message, index) in messages" :key="index" class="message">
      <div class="message-info">
        <div class="message-subject">
          <i class="fas fa-user"></i> {{ message.subject }}
        </div>
        <div class="message-display">{{ message.display }}</div>
      </div>
      <div class="message-content">{{ message.message }}</div>
    </div>
  </div>
</template>
 
<script>
import messagesData from '@/assets/messages.json';
 
export default {
  data() {
    return {
      messages: [],
    };
  },
  created() {
    this.messages = messagesData;
  },
};
</script>
 
<style scoped>
.messages-container {
  padding: 20px;
}
 
.message {
  border: 1px solid #e0e0e0; /* Light gray border */
  background-color: #fff; /* White background */
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: box-shadow 0.3s ease; /* Smooth shadow transition */
 
  /* Hover effect */
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Slightly stronger shadow on hover */
  }
}
 
.message-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
 
.message-subject {
  font-weight: bold;
  color: #333; /* Darker text color */
}
 
.message-content {
  font-size: 14px;
  color: #666; /* Slightly darker text color */
}
</style>
 