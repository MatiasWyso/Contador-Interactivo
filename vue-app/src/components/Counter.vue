<template>
    <div>
        <h1>Contador</h1>
        <div class="count-container">{{ count }}</div>
        <div>
            <button @click="decrement">Decrementar</button>
            <button @click="reset">Resetear</button>
            <button @click="increment">Incrementar</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

const reset = () => {
  count.value = 0;
};
</script>