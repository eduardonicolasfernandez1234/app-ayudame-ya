import { Juego } from "../juego";

export interface CategoriaPuzzle{
    id: number,
    created_at: Date,
    updated_at: Date,
    nombre: string,
    puntaje_limite: number,
    imagen_modojuego: string,
    puntaje_maximo_jugador: number | null,
    juego: Juego
}