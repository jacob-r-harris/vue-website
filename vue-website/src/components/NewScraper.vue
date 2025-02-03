<template>
    <div class="main-container">
        <div class="search-bar">
            <form>
                <input type="text" v-model="searchInp">
            </form>
            <button @click="fetchData">Fetch data</button>
        </div>
        <div class="results-list">
            <ul>
                <li>
                    <div v-if="data" class="result">
                        <div>
                            <img :src="data.image">
                        </div>
                        <div>
                            <a :href="data.url"><h2>{{ data.outlet }}: {{ data.headline }}</h2></a>
                            <p>{{ data.blurb }}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div v-if="data" class="result">
                        <div>
                            <img :src="data.image">
                        </div>
                        <div>
                            <a :href="data.url"><h2>{{ data.outlet }}: {{ data.headline }}</h2></a>
                            <p>{{ data.blurb }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
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

<style scoped>
    .main-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .search-bar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        padding: 30px 0px;
    }

    .results-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%
    }

    .result {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgb(32, 36, 37);
    }

    .result > div {
        padding: 0.5% 10px 0px;
    }

    .result > div > img {
        width: 100%;
        border-radius: 10%;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0 20%;
    }

    ul > li {
        justify-content: center;
        padding: 10px 0px;
    }

    a {
        color: whitesmoke;
        text-decoration: none;
    }
</style>