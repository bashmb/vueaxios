<template lang='jade'>
  div
    h1 page
    h3 Title: {{ title }}
    h5 Body: {{ body}}
    h6 {{done}}
    router-link(to='/') home
</template>

<script>
  import axios from 'axios'
  export default {
    data () {

      return {
        title: null,
        body: null,
        done: null,
        errors: []
      }
    },

    created () {
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        this.title = response.data.title
        this.body = response.data.body
        console.log('done')
      })
      .catch( e => {
        this.errors.push(e)
      })
    }
  }

</script>