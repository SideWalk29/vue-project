<script setup>
// Import ref and reactive from Vue for handling reactivity
import { ref, reactive } from 'vue';

// Create a reactive reference for a primitive value (count) using ref
const count = ref(0);

// Create a reactive object (user) using reactive
const user = reactive({
  name: 'John',
  age: 30
});

// Function that increments both count and user age when called
const increment = () => {
  count.value++; // Increment count (ref values need .value to access)
  user.age++;    // Increment user's age (reactive objects do not need .value)
};
</script>

<template>
  <div>
    <!-- Display the count and user info -->
    <p>Count: {{ count }}</p>
    <p>User: {{ user.name }} (Age: {{ user.age }})</p>
    
    <!-- Button to trigger increment function -->
    <button @click="increment">Increment</button>
  </div>
</template>
