import { reactive } from "vue";
import type { Store } from "../interfaces/Store";

const store = reactive<Store>({
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    fechaNacimiento: "1990-01-01",
    telefono: "123456789",
    estado: true,
    crecer: () => {
        store.edad++;
    },
});

export default store;