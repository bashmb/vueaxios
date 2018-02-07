<template lang='jade'>
  div
    h3 Title: {{ title }}
    h5 Body: {{ body}}
    router-link(to='/') home
</template>

<script>
  import axios from 'axios'
  
  export default {
    data () {
      return {
        title: null,
        body: null,
        errors: []
      }
    },

    created () {
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        this.title = response.data.title
        this.body = response.data.body
      })
      .catch( e => {
        this.errors.push(e)
      })
    }
  }

</script>