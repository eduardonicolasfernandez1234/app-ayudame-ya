export interface Pregunta{
    id: number;
    modo_juego_id: number;
    numero: number;
    pregunta: string;
    puntos_correcto: number;
    puntos_incorrecto: number;
    respuesta: string;
    ayuda: string | null;
    imagen_pregunta: string | null;
    imagen_juego: string | null;
}