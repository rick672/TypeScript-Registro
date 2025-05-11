<script setup lang="ts">
import type { Persona } from "../interfaces/Persona";

// const personas: Persona[] = [
//     {
//         nombre: "Juan",
//         apellido: "Perez",
//         edad: 25,
//         fechaNacimiento: "1990-01-01",
//         telefono: "123456789",
//         estado: true,
//         crecer: () => {
//             console.log("Juan crece");
//         },
//     },
// ];
</script>

<template>
    <div>
        <h1>TypeScript</h1>
        <hr>
        <h2>Personas</h2>
        <p>Lista de personas</p>
        <p>Nombre:</p>
        <p>Apellido:</p>
        <p>Edad:</p>
        <p>Fecha de nacimiento:</p>
        <p>Telefono:</p>
        <p>Estado:</p>
    </div>
</template>