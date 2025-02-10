<script setup>
// Define the expected prop from the parent
const props = defineProps(['message']);

// Define the event the child can emit
const emit = defineEmits(['sayHello']);

// Function to emit the event
const sendMessage = () => {
  emit('sayHello', 'Hello, Parent!');
};
</script>

<template>
  <div>
    <!-- Display the message received from the parent -->
    <p>Message from Parent: {{ props.message }}</p>
    <!-- Button that triggers the emit function -->
    <button @click="sendMessage">Send Message to Parent</button>
  </div>
</template>
