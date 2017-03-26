<template>
  <div class="well">
    <div class="row">
      <form class="form-horizontal">
        <fieldset>
          <!-- Form Name -->
          <legend>{{ $route.name=='edit' ? 'Edit' : 'New' }} Author Information</legend>

          <!-- First Name input-->
          <div class="form-group" :class="{'has-error' : $v['person.fname'].$error}" >
            <label class="col-md-4 control-label" for="fname">First Name</label>
            <div class="col-md-4">
              <input
                id="fname"
                name="person.fname"
                type="text"
                placeholder="Enter First Name"
                class="form-control input-md"
                :value="person.fname"
                @input="onInput"
              />
              <span class="help-block">Please enter the Author's First Name</span>
            </div>
          </div>

          <!-- Last Name input-->
          <div class="form-group" :class="{'has-error' : $v['person.lname'].$error}">
            <label class="col-md-4 control-label" for="lname">Last Name</label>
            <div class="col-md-4">
              <input
                id="lname"
                name="person.lname"
                type="text"
                placeholder="Enter Last Name"
                class="form-control input-md"
                :value="person.lname"
                @input="onInput"
              />
              <span class="help-block">Please enter Author's Last Name</span>
            </div>
          </div>

          <!-- Email input-->
          <div class="form-group" :class="{'has-error' : $v['person.email'].$error}">
            <label class="col-md-4 control-label" for="email">Email Address</label>
            <div class="col-md-4">
              <input
                id="email"
                name="person.email"
                type="text"
                placeholder="Enter email"
                class="form-control input-md"
                :value="person.email"
                @input="onInput"
              />
              <span class="help-block">Please enter the Author's email address.</span>
              <p v-if="!$v['person.email'].email">The input must be a proper email!</p>
            </div>
          </div>

          <!-- Button Save and Cancel -->
          <div class="form-group">
            <label class="col-md-4 control-label" for="btnSave"></label>
            <div class="col-md-8">
              <a href="#" id="btnSave" name="btnSave" class="btn btn-success" @click.prevent="onSave">Save</a>
              <router-link :to="{ name: 'people' }" id="btnCancel" name="btnCancel" class="btn btn-default">Cancel</router-link>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { required, minLength, email } from 'vuelidate/lib/validators'
  export default {
    computed: mapState(['person']),
    methods: {
      onInput (e) {

        this.$v[e.target.name].$touch()   // update validation
        console.log('onInput', this.$v[e.target.name] )
        this.$store.dispatch('EDIT_PERSON', e) // update store
      },
      onSave: function () {
        this.$store.dispatch('SAVE_PERSON')
        this.$router.push({name: 'people'})
      }
    },
    validations: {
      'person.fname': {
        required,
        minLength: minLength(2)
      },
      'person.lname': {
        required,
        minLength: minLength(2)
      },
      'person.email': {
        required,
        email
      }
    },
    mounted: function () {
      this.$store.dispatch('SET_CURRENT_PERSON')
    }
  }
</script>

