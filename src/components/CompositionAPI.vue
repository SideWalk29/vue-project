<script setup>
import { ref } from "vue";

const contador = ref(0);

const incrementar = () => {
  contador.value++;
};

const disminuir = () => {
  contador.value--;
}
</script>

<template>
  <div>
    <h3>Contador en Composition: {{ contador }}</h3>
    <button @click="incrementar">Aumentar</button>
    <button @click="disminuir">Disminuir</button>
  </div>
</template>
