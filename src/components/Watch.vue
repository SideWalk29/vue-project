<script setup>
// Import ref and watch from Vue for watching reactive state changes
import { ref, watch } from 'vue';

// Create a reactive reference for count
const count = ref(0);

// Watch the count variable and log its changes
watch(count, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
});

// Function to increment the count variable
const increment = () => {
  count.value++; // Increment the count value (needs .value for refs)
};
</script>

<template>
  <div>
    <!-- Display the current count -->
    <p>Count: {{ count }}</p>
    
    <!-- Button to increment the count -->
    <button @click="increment">Increment</button>
  </div>
</template>
