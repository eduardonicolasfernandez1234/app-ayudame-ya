export interface Usuario{
    id: number;
    password: string;
    last_login: Date | null;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    puntaje_total: number;
    logros: [];
    estatus_actual: string | null;
    logros_temporal: [];
    rachas_preguntas: number;
    inicio_sesion_consecutivo: number;
    puntaje_diario: number;
    ultima_conexion: Date;
    cantidad_ayuda_solicitada: number;
}