<script setup>
// Injecting the shared data provided by the parent component (in this case, "sharedMessage")
const sharedMessage = inject('sharedMessage');
</script>

<template>
  <div>
    <!-- Display the shared message that was injected from the parent -->
    <p>Injected Message: {{ sharedMessage }}</p>
  </div>
</template>
