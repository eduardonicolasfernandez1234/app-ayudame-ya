export interface Articulo{
    id: number;
    created_at: Date;
    updated_at: Date;
    titulo: string;
    descripcion: string;
}

export interface DatoCurioso{
    id: number;
    titulo: string;
    descripcion: string;
    enlace: string;
    created_at: Date;
    updated_at: Date;
}