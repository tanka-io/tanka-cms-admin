<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand :to="{name:'index'}">
            Administration
        </b-navbar-brand>
        <b-nav-toggle target="nav_collapse"></b-nav-toggle>
        <b-collapse is-nav id="nav_collapse">
            <b-nav is-nav-bar>
                <b-nav-item :to="{name:'themes'}">Theme</b-nav-item>
            </b-nav>
            <b-nav is-nav-bar>
                <b-nav-item :to="{name:'pages'}">Pages</b-nav-item>
            </b-nav>
            <b-nav is-nav-bar>
                <b-nav-item :to="{name:'sections'}">Sections</b-nav-item>
            </b-nav>
            <b-nav is-nav-bar>
                <b-nav-item :to="{name:'datas'}">Datas</b-nav-item>
            </b-nav>
            <b-nav is-nav-bar>
                <b-nav-item :to="{name:'schemas'}">Schemas</b-nav-item>
            </b-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {};
</script>

<style>

</style>
