<template>
    <div>
        <span>
            {{title}}
        </span>

    </div>
</template>

<script>
  export default {
    name: "index.vue",
    props:{
      title:{
        default:'标题'
      }
    }
  }
</script>

<style scoped>

</style>
