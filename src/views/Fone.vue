<template>
  <div>
    <h1>{{ fonetype.name }} ({{ $route.params.species }}) </h1>
    <p>Model : {{ fonetype.model }}</p>
    <p>Color : {{ fonetype.color }}</p>
    <p>Quantity : {{ fonetype.quantity }}</p>
    <p>Price : {{ fonetype.price }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
    return {
      fonetype: {}
    }
  },
  computed: {
    ...mapState([
      'apple',
      'sams'
    ])
  },
  mounted() {
    const fonetype = this[this.$route.params.species][this.$route.params.id]
    this.fonetype = fonetype
  }
}
</script>
