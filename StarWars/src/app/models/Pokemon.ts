import { Move } from './Move';
import { Type } from './Type';

export interface Pokemon {
    Id : number,
    Name: string,
    Types: Array<Type>;
    Moves: Array<Move>;
    
}