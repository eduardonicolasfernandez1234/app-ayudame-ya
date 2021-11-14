export interface Logro{
    id: number;
    created_at: Date;
    updated_at: Date;
    nombre: string;
    descripcion: string;
    imagen: string | null;
    miniatura: string | null;
    temporal: boolean;
    puntos_recompensa: number;
    categoria: number;
    puntos_diarios: number;
    inicio_consecutivo: number;
    respuesta_consecutiva: number;
    ayuda_solicitada: number;
}