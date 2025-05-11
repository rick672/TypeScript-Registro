export interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    fechaNacimiento: string;
    telefono: string;
    estado: boolean;

    crecer:()=>void;
}