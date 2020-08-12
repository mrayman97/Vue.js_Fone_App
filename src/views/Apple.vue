<template>
	<div>
		<FoneTable
      species="Apple"
      :fone="apple"
    />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import FoneTable from '@/components/FoneTable.vue'

export default {
  components:{
    FoneTable
  },
	data() {
    return {}
  },
  computed: {
    ...mapState([
      'apple'
    ])
  }
}
</script>