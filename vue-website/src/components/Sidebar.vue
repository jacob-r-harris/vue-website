<template>
    <div id="sidebarBg" class="sidebar-content">
        <router-link to="/home" class="sidebar-nav-button">
            Home
        </router-link>

        <router-link to="/giraffe" class="sidebar-nav-button">
            Giraffe
        </router-link>

        <router-link to="/newscraper" class="sidebar-nav-button">
            NewScraper
        </router-link>
    </div>
</template>

<script>
</script>

<style scoped>
    #sidebarBg {
        min-width: 10%;
        min-height: 100%;
        background: rgb(38, 43, 44);
        transition: all 0.2s;
    }

    a {
        text-decoration: none;
    }

    .sidebar-content {
        display: flex;
        flex-direction: column;
        position: fixed;
    }

    .sidebar-nav-button {
        margin: 0;
        padding: 10px;
        border: none;
        color: whitesmoke;
        font-family: 'Courier New', Courier, monospace;
        font-size: large;
        text-align: left;
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
    }

    .sidebar-nav-button:hover {
        background-color: rgba(245, 245, 245, 0.027);
        transition: 0.15s;
    }
</style>