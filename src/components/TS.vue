<script setup lang="ts">
import store from "../store/store";
import { ref, defineComponent } from "vue";

const per = defineComponent({
    name: "Persona",
    setup() {
        return {
            store
        }
    }
});

</script>

<template>
    <div>
        <h1>TypeScript</h1>
        <hr>
        <h2>Personas</h2>
        <p>Lista de personas</p>
        <p>Nombre: {{ store.nombre }}</p>
        <p>Apellido: {{ store.apellido }}</p>
        <p>Edad: {{ store.edad }}</p>
        <p>Fecha de nacimiento: {{ store.fechaNacimiento }}</p>
        <p>Telefono: {{ store.telefono }}</p>
        <p>Estado: {{ store.estado }}</p>
        <button @click="store.crecer">Crecer</button>
        <button @click="store.decrecer">Decrecer</button>
        <button @click="store.state">Cambiar estado</button>

    </div>
</template>