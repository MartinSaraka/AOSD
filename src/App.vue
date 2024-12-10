<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>AOP Logging in TypeScript</q-toolbar-title>
        <q-btn flat to="/" label="Basic Cart" />
        <q-btn flat to="/advanced" label="Advanced Cart" />
        <q-btn flat to="/ts-aspect" label="Kaop library Cart" />
        <q-btn flat to="/traditional" label="Traditional Cart" />
      </q-toolbar>
    </q-header>

    <router-view />
  </q-layout>
</template>
