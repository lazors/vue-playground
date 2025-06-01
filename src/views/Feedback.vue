<template>
  <div>
    <h1>Feedback</h1>
    <form @submit.prevent="handleSubmit">
      <label for="feedback-text">Your Feedback</label>
      <textarea id="feedback-text" v-model="feedbackText" data-testid="feedback-textarea"></textarea>

      <label for="rating-select">Rate us:</label>
      <select id="rating-select" v-model="rating" data-testid="rating-select">
        <option value="5">Excellent</option>
        <option value="4">Good</option>
        <option value="3">Okay</option>
        <option value="2">Bad</option>
        <option value="1">Terrible</option>
      </select>

      <div v-if="showWarning" data-testid="hidden-warning">You must enter feedback</div>

      <button type="submit" data-testid="submit-feedback" aria-label="Submit Feedback">Send Feedback</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const feedbackText = ref('');
const rating = ref('');
const showWarning = ref(false);

function handleSubmit() {
  if (!feedbackText.value.trim()) {
    showWarning.value = true;
  } else {
    showWarning.value = false;
    alert(`Feedback submitted: ${feedbackText.value}, rating: ${rating.value}`);
  }
}
</script> 