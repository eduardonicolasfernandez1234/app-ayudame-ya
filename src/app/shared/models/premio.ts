export interface Premio{
    id: number;
    created_at: Date;
    updated_at: Date;
    nombre: string;
    descripcion: string;
    imagen: string | null;
    miniatura: string | null;
    categoria: number;
    puntos_requeridos: number;
}