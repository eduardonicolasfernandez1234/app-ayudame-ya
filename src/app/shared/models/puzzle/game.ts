export type GAME = { 
  id: number, 
  categoryId: number, 
  folder: string, 
  image: string, 
  time: string, 
  moves: number, 
  fails: number 
}

// export type Piece = {
//   index: number, 
//   id: number, 
//   misplaced: boolean, 
//   path: string,
// };

export type Piece = {
  [key: string]: string | boolean | number
};