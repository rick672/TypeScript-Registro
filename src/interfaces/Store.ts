export interface Store {
    nombre: string;
    apellido: string;
    edad: number;
    fechaNacimiento: string;
    telefono: string;
    estado: boolean;

    crecer?:()=>void;
    decrecer?:()=>void;
    state?:()=>void;
}