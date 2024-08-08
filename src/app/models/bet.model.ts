import { Game } from './game.model';

export class Bet {
  constructor(
    public id: string,
    public value: number,
    public odd: number,
    public betStyle: string,
    public green: boolean,
    public game: Game
  ) {}
}
