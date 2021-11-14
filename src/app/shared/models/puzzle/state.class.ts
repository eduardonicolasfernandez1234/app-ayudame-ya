import { Tile } from "./tile.class";

export interface GameState{
    tiles: Tile[];
    goal: boolean;
    image: string;
    tileSize: number;
  }
  