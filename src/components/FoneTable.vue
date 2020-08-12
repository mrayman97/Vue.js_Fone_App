<template>
	<div>
		<h1>{{ species }} for Sales</h1>
		<b-table striped hover :items="fone">
      <template v-slot:cell(name)="data">
        <router-link :to="`/fones/${species}/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
	</div>
</template>

<script>
export default{
  props: {
    species: String,
    fone: Array
  }
}
</script>