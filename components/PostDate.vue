<template>
  <div class="post-date">
    <small class="font-italic font-weight-bold">
        {{date | timeString}}
    </small>
</div>

</template>

<script>
export default {
  props: ['date'],
  filters: {
    timeString(val){
      let time = new Date( Date.parse(val))
        .toLocaleString('en-US', {year: 'numeric', month: 'short', day: 'numeric'} )

      return `${time}`
    }
  }
}
</script>

<style>

</style>
