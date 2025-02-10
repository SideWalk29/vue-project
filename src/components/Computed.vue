<script setup>
// Import ref and computed from Vue for handling computed properties
import { ref, computed } from 'vue';

// Create a reactive reference for a number (initially 5)
const number = ref(5);

// Create a computed property to double the number
const doubleNumber = computed(() => number.value * 2); // Automatically updates when number changes
</script>

<template>
  <div>
    <!-- Display the number and its doubled value from the computed property -->
    <p>Number: {{ number }}</p>
    <p>Double: {{ doubleNumber }}</p>
  </div>
</template>
