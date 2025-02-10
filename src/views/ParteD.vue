<script setup>
// Import both child components
import PropsChild from './Props.vue';
import EmitsChild from './Emits.vue';

// Function to handle the emitted message from EmitsChild
const handleMessage = (msg) => {
  console.log('Message from Emit Child:', msg);
};
</script>

<template>
  <div>
    <h2>Parent Component</h2>

    <!-- Passing the "message" prop to the PropsChild -->
    <PropsChild message="Hello from Parent (Props)" />

    <hr />

    <!-- Listening for the "sayHello" event from the EmitsChild -->
    <EmitsChild @sayHello="handleMessage" />
  </div>
</template>
