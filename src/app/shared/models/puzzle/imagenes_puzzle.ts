import { CategoriaPuzzle } from "./categoria_puzzle";

export interface ImagenPuzzle{
    id: number,
    categoria: CategoriaPuzzle
    created_at: Date,
    updated_at: Date,
    imagen: string,
    puntos_recompensa: number,
    puntos_error: number,
    puntos_acierto: number,
    descripcion: string
}

export interface SubImagenPuzzle{
    id: number,
    imagen_puzzle: ImagenPuzzle,
    created_at: Date,
    updated_at: Date,
    imagen: string,
    identificador: number,
    index: number
}