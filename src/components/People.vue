<template>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title pull-left">Author's View</h3>
          <router-link :to="{name: 'new'}" class="btn btn-default pull-right">New</router-link>
          <div class="clearfix"></div>
         </div>

          <table class="table table-condensed table-striped">
            <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in people">
              <td>{{item.id}}</td>
              <td>{{item.fname}}</td>
              <td>{{item.lname}}</td>
              <td>{{item.email}}</td>
              <td>
                <router-link :to="{name: 'edit', params: {id: item.id}}" class="btn btn-default">Edit</router-link>
                <a href="#" :id="item.id" class="btn btn-default" @click.prevent="deleteRecord">Delete</a>
              </td>
            </tr>
            </tbody>
          </table>

      </div>

</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState(['people','person']),
    methods: {
//      createRecord: function () {
//        this.$store.dispatch('SET_NEW_PERSON')
//        this.$router.push({name: 'new'})
//      },
//      editRecord: function (e) {
//
//      },
      deleteRecord: function (e) {
        let id = e.target.id
        this.$store.dispatch('DELETE_PERSON', id)
      }
    },
    mounted: function () {
      this.$store.dispatch('SET_PEOPLE_LIST')
    }
  }
</script>
<style lang="sass" scoped>

    .panel-heading h3
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      line-height: normal
      width: 75%
      padding-top: 8px
      color: #42b983
      margin: 0

</style>
