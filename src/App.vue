<template>
  <div id="app">
    <header class="bg-primary text-white py-2">
      <div class="container d-flex justify-content-between">
        <a href="#" class="navbar-brand text-white">Статейка</a>

        <div class="nav" id="nav">
          <router-link class="nav-link text-white" to="/">Главная</router-link>
          <router-link class="nav-link text-white" to="/all">Все статьи</router-link>
          <router-link class="nav-link text-white" to="/manage">Управление статьями</router-link>
        </div>
      </div>
  </header>
    <router-view/>
  </div>
</template>