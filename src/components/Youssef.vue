<template>
    <div>
      <h2>📌 Vue Part D in One File (Youssef.vue)</h2>
  
      <!-- Displaying Reactive Data -->
      <p>Reactive Message: {{ message }}</p>
  
      <!-- Updating the Reactive State -->
      <input v-model="message" placeholder="Type a message..." />
  
      <!-- Button to Simulate Emits -->
      <button @click="simulateEmit">Simulate Emit</button>
  
      <!-- Computed Property Display -->
      <p>Computed Greeting: {{ computedGreeting }}</p>
  
      <!-- Watching Message Changes -->
      <p>Last Message Change: {{ lastMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  
  /* 🔹 Reactivity (Ref & Reactive) */
  // Creating a reactive variable
  const message = ref("Hello from Youssef.vue");
  
  // Another reactive state for tracking changes
  const lastMessage = ref("No changes yet");
  
  /* 🔹 Simulating Emits */
  // Instead of emitting to a parent, we just log a message
  const simulateEmit = () => {
    console.log("Event Emitted! Message: ", message.value);
  };
  
  /* 🔹 Computed Properties */
  // Automatically updates when 'message' changes
  const computedGreeting = computed(() => {
    return `Computed says: ${message.value}`;
  });
  
  /* 🔹 Watch (Watching Changes) */
  // Watches 'message' and updates 'lastMessage' whenever 'message' changes
  watch(message, (newVal, oldVal) => {
    lastMessage.value = `Changed from "${oldVal}" to "${newVal}"`;
  });
  </script>
  
  <style scoped>
  /* 🔹 Some Basic Styles */
  div {
    text-align: center;
    font-family: Arial, sans-serif;
  }
  button {
    margin-top: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  