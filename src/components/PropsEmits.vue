<script setup>
// Define the props that the parent will pass to the child (in this case, "message")
const props = defineProps(['message']);

// Define the emits the child can trigger to notify the parent (in this case, 'sayHello' event)
const emit = defineEmits(['sayHello']);

// Function that will be called when the button is clicked to send a message back to the parent
const sendMessage = () => {
  emit('sayHello', 'Hello from Child!'); // Emit the 'sayHello' event with a message
};
</script>

<template>
  <div>
    <!-- Display the message passed from the parent using the "message" prop -->
    <p>Message from Parent: {{ props.message }}</p>
    
    <!-- Button that, when clicked, calls the sendMessage function to emit an event to the parent -->
    <button @click="sendMessage">Send Message to Parent</button>
  </div>
</template>
