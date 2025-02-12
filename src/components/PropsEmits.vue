<script setup>
// Define the props (message received from parent)
const props = defineProps({
  message: String,
});

// Define the emits (event to send back to the parent)
const emit = defineEmits(['sendMessage']);

// Function to send a message to the parent
const sendMessageToParent = () => {
  emit('sendMessage', 'Hello from the child!');
};
</script>

<template>
  <div>
    <h2>Child Component</h2>
    
    <!-- Display the message received from the parent -->
    <p>Message from Parent: {{ props.message }}</p>

    <!-- Button to send a message back to the parent -->
    <button @click="sendMessageToParent">Click to Send Message to Parent</button>
  </div>
</template>
