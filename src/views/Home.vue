<template>
  <div class="home-view-container">
    <h1>Buy a new fone.</h1>
    {{ getAllSams.length }}
    {{ foneCount }}

    <button @click="toggleFoneForm" class="btn btn-primary">Add New Fone</button>

    <b-form @submit.prevent="handleSubmit" v-if="showFoneForm">

      <b-form-group id="input-group-2" label="Fone Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['Sams', 'Apple']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Color:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.color"
          :options="['Black', 'White', 'Pink', 'Gold', 'Gray']"
          placeholder="Choose Color"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Fone Quantity:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.quantity"
          required
          placeholder="Enter Quantity"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Fone Price:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.price"
          required
          placeholder="Enter Price"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Fone Model:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.model"
          required
          placeholder="Enter model"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  name: 'home',
  data(){
    return {
      showFoneForm: false,
      formData:{
        name:'',
        model:'',
        species:null,
        color:null,
        quantity:0,
        price:0
      }
    }
  },
  computed: {
    ...mapGetters([
      'foneCount',
      'getAllSams'
    ])
  },
  methods: {
    ...mapActions([
      'addFone'
    ]),
    toggleFoneForm() {
      this.showFoneForm =! this.showFoneForm
    },
    handleSubmit(){
      const { species, name, model, color, quantity, price } = this.formData
      const payload = {
        species,
        fone: {
          name,
          model,
          color,
          quantity,
          price
        }
      }
      this.addFone(payload)

      //reset form
      this.formData = {
        name:'',
        model:'',
        species:null,
        color:null,
        quantity:0,
        price:0
      }
    }
  }
}
</script>
