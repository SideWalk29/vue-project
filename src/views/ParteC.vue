<script setup>
import OptionsAPI from '../components/OptionsAPI.vue'
import CompositionAPI from '../components/CompositionAPI.vue'
</script>
<template>
    <main>
        <h2>Contadores en OptionsAPI y CompositionAPI</h2>
        <div class="contenedormain">
            <OptionsAPI />
            <CompositionAPI />
    
        </div>
        
    </main>



</template>
<style scoped>
main {
    /* display: flex; */
}
.contenedormain {
    border: whitesmoke solid 2px;
    width: 100%;

}
h2 {
    font-size: 2rem;
}
</style>