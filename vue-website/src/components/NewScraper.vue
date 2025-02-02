<template>
    <div>
        <button @click="fetchData">Fetch data</button>
    </div>
    <div v-if="data">
        <img :src="data.image">
        <a :href="data.url"><h2>{{ data.headline }}</h2></a>
        <p>{{ data.blurb }}</p>
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