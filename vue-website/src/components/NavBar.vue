<template>
    <div id="navBg" class="flex-container">
        <button @click="toggleSidebar" class="sidebar-button">
            <i class="material-icons">menu</i>
        </button>

        <router-link to="/home" class="home-button">
            <h1>localhost:</h1>
        </router-link>
    </div>
</template>

<script>
    export default {
        methods: {
            toggleSidebar() {
                this.$emit('toggle-sidebar')
            }
        }
    }
</script>

<style scoped>
    h1{
        margin: 6% 0;
        padding: 0;
    }

    #navBg {
        background-color: rgb(15, 16, 17);
        position: sticky;
        top: 0;
    }

    .flex-container {
        display: flex;
        flex-direction: row;
    }

    a {
        text-decoration: none;
    }

    .home-button {
        margin: 0;
        padding: 0;
        border: none;
        color: whitesmoke;
        font-family: 'Courier New', Courier, monospace;
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
    }

    .sidebar-button {
        margin: 10px 10px;
        border-radius: 10%;
        color: whitesmoke;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        transition-duration: 0.3s;
    }

    .sidebar-button:hover {
        color: rgb(146, 146, 146);
        cursor: pointer;
    }

    .sidebar-button:active {
        color: white;
        font-size: x-small;
    }
</style>