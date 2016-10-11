<template>
  <div class="content">
    <h1 class="white-text">{{ msg }}</h1>
    <p class="white-text">{{ longMsg }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: 'Hello Vue 2.016!',
      longMsg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi qui iste, omnis quo vitae odio!'
    }
  }
}
</script>
