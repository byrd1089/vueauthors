<template>
  <div class="well">
    <div class="row">
      <form class="form-horizontal">
        <fieldset>
          <!-- Form Name -->
          <legend>{{ $route.name=='edit' ? 'Edit' : 'New' }} Author Information</legend>

          <!-- First Name input-->
          <div class="form-group" :class="{'has-error has-feedback' : $v.person.fname.$error}" >
            <label class="col-md-4 control-label" for="fname">First Name</label>
            <div class="col-md-4">
              <input
                id="fname"
                name="fname"
                type="text"
                placeholder="Enter First Name"
                class="form-control input-md"
                :value="person.fname"
                @input="onInput"
                autocomplete="off"
              />
              <span v-if="!$v.person.fname.$error" class="help-block">Please enter the Author's First Name</span>
              <span v-if="$v.person.fname.$dirty && !$v.person.fname.required" class="help-block">First Name is required</span>
              <span v-if="$v.person.fname.$dirty && !$v.person.fname.minLength" class="help-block" >First Name must have at least {{$v.person.fname.$params.minLength.min}} letters.</span>
              <span v-if="$v.person.fname.$error" class="glyphicon glyphicon-remove form-control-feedback"></span>
            </div>
          </div>

          <!-- Last Name input-->
          <div class="form-group" :class="{'has-error has-feedback':$v.person.lname.$error}" >
            <label class="col-md-4 control-label" for="lname">Last Name</label>
            <div class="col-md-4">
              <input
                id="lname"
                name="lname"
                type="text"
                placeholder="Enter Last Name"
                class="form-control input-md"
                :value="person.lname"
                @input="onInput"
                autocomplete="off"
              />
              <span v-if="!$v.person.lname.$error"    class="help-block">Please enter the Author's Last Name</span>
              <span v-if="$v.person.lname.$dirty && !$v.person.lname.required"  class="help-block">Last Name is required</span>
              <span v-if="$v.person.lname.$dirty && !$v.person.lname.minLength" class="help-block">Last Name must have at least {{$v.person.lname.$params.minLength.min}} letters.</span>
              <span v-if="$v.person.lname.$error"     class="glyphicon glyphicon-remove form-control-feedback"></span>
            </div>
          </div>

          <!-- Email input-->
          <div class="form-group" :class="{'has-error':$v.person.email.$error}">
            <label class="col-md-4 control-label" for="email">Email Address</label>
            <div class="col-md-4">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter email"
                class="form-control input-md"
                :value="person.email"
                @input="onInput"
                autocomplete="off"
              />
              <span v-if="!$v.person.email.$error"    class="help-block">Please enter the Author's email address</span>
              <span v-if="!$v.person.email.required"  class="help-block">An email address is required</span>
              <span v-if="!$v.person.email.email" class="help-block">Please enter a proper email!</span>
              <span v-if="$v.person.email.$error" class="glyphicon glyphicon-remove form-control-feedback"></span>
            </div>
          </div>

          <!-- Button Save and Cancel -->
          <div class="form-group">
            <label class="col-md-4 control-label" for="btnSave"></label>
            <div class="col-md-8">
              <a href="#" id="btnSave" name="btnSave" class="btn btn-success" :class="{'disabled' : $v.person.$invalid}" @click.prevent="onSave">Save</a>
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

        this.$v.person[e.target.name].$touch()   // update validation
        //console.log('onInput', this.$v[e.target.name] )
        this.$store.dispatch('EDIT_PERSON', e) // update store
      },
      onSave: function () {
        this.$store.dispatch('SAVE_PERSON')
        this.$router.push({name: 'people'})
      }
    },
    validations: {
      person: {
        fname: {
          required,
          minLength: minLength(2)
        },
        lname: {
          required,
          minLength: minLength(2)
        },
        email: {
          required,
          email
        }
      }
    },
    mounted: function () {
      this.$store.dispatch('SET_CURRENT_PERSON')
    }
  }
</script>

