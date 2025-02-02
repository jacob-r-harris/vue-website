<template>
    <button @click="fetchData">Fetch data</button>
    <div v-if="data">
        <p>Test: {{ data }}</p>
    </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
        return {
            data: null,
        };
    },
    methods: {
      async fetchData() {
        const path = 'http://localhost:5000/api/data'
        //const path = "https://random-data-api.com/api/v2/users"
        axios.get(path)
            .then((res) => {
                this.data = res.data;
            })
            .catch((error) => {
                console.error(error);
            })
      }
    }
  }
 </script>

<style>
    p {
        color: whitesmoke;
    }
</style>