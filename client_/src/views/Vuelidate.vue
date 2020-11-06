<template>
<v-card>
<v-card-title>Users</v-card-title>

<v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
</v-card>


</template>
<script>
 import { validationMixin } from 'vuelidate'
 import { required , maxLength} from 'vuelidate/lib/validators'

export default {
mixins: [validationMixin],
  data(){
        return{
            name: '' 
        }
        }, 

validations:{
    name: { required , maxLength: maxLength(10)}},

computed: 
{
    nameErrors(){
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
    }
}
}
</script>