<template>
    <b-navbar toggleable="sm" type="dark" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :to="{name: 'home'}" :active="$route.name == 'home'"> Home </b-nav-item>
                <b-nav-item :to="{name: 'syntax-students'}" :active="$route.path.includes('syntax-students')"> Students </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>