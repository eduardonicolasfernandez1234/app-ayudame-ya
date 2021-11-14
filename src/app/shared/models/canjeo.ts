export interface Canjeo{
    id: number;
    created_at: Date;
    updated_at: Date;
    nombre: string;
    imagen: string | null;
    miniatura: string | null;
    categoria: number;
    puntos_base: number;
}

export interface ProductoCanjeo{
    id: 1;
    canjeo: number | Canjeo;
    created_at: Date;
    updated_at: Date;
    nombre: string;
    descripcion: string;
    imagen: string | null;
    miniatura: string | null;
    puntos_necesarios: number;
}