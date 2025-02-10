<script setup>
// Importing the components for each Vue concept
import PropsEmits from '../components/PropsEmits.vue';
import ProvideInject from '../components/ProvideInject.vue';
import Reactivity from '../components/Reactivity.vue';
import Computed from '../components/Computed.vue';
import Watch from '../components/Watch.vue';
</script>



<template>
  <div>
    <h1>Vue Concepts Explained</h1>

    <!-- 1. Props & Emits -->
    <section id="props-emits">
      <h2>Props & Emits - Parent → Child and Child → Parent Communication</h2>
      <PropsEmits />
    </section>

    <!-- 2. Provide & Inject -->
    <section id="provide-inject">
      <h2>Provide & Inject - Global State Sharing</h2>
      <ProvideInject />
    </section>

    <!-- 3. Reactivity -->
    <section id="reactivity">
      <h2>Reactivity - Using ref() and reactive()</h2>
      <Reactivity />
    </section>

    <!-- 4. Computed -->
    <section id="computed">
      <h2>Computed - Using Computed Properties</h2>
      <Computed />
    </section>

    <!-- 5. Watch -->
    <section id="watch">
      <h2>Watch & WatchEffect - Tracking State Changes</h2>
      <Watch />
    </section>
  </div>
</template>

<style scoped>
/* Optional styling for each section */
section {
  margin-bottom: 2rem;
}
section h2 {
  font-size: 1.5rem;
  color: #2c3e50;
}
</style>
