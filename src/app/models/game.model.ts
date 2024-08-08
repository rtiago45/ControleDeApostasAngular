import { OneEntranceDetail } from "./entrance.model";

export class Game {
  constructor(
    public teams: string[],
    public competition: string,
    public entrances: OneEntranceDetail[]
  ) {}
}
