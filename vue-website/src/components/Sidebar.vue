<template>
    <div id="sidebarBg" class="sidebar-content">
        <button class="sidebar-nav-button">
            Home
        </button>

        <button class="sidebar-nav-button">
            Giraffe
        </button>
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