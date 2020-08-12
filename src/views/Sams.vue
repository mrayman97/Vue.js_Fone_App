<template>
	<div>
		<FoneTable
      species="Sams"
      :fone="sams"
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
      'sams'
    ])
  }
}
</script>