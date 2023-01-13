<script setup lang="ts">
import {computed, ref, watch} from 'vue';
import {ExpressionIt} from '../../wasm';

defineProps<{ msg: string }>();

const count = ref(0);

const expression = ref('2023-2022');

const result = computed(() => {
      let result: string
      try {
        result = ExpressionIt(expression.value);
      } catch (e) {
        result = 'Error';
      }
      return result;
    },
);
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="card">
      <input type="text" class="format" v-model="expression"
             style="text-align: center; margin-top: 10px "/>
      <button type="button" class="format" @click="count++"
              style="margin-top: 10px; ">Result Is {{result}}
      </button>
    </div>

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
