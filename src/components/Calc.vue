<script setup lang="ts">
import { computed, ref, watch } from 'vue';

defineProps<{ msg: string }>()

const count = ref(0)

const expression = ref('2023-2022')

watch(expression, (newVal, oldVal) => {
  console.log('newVal', newVal)
  console.log('oldVal', oldVal)
})

</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="card">
      <input type="text" class="format" v-model="expression" style="text-align: center; margin-top: 10px " />
      <button type="button" class="format" @click="count++" style="margin-top: 10px; ">Result Is {{  }}</button>
    </div>

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
