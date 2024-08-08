import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: { [key: string]: string[] } = {
    'Serie A': ['Corinthians', 'São Paulo', 'Time A3', /* ... 17 outros times */],
    'Serie B': ['Santos', 'Coritiba', 'Time B3', /* ... 17 outros times */],
    'Premier League': ['Team PL1', 'Team PL2', 'Team PL3', /* ... 17 outros times */],
    'La Liga': ['Team LL1', 'Team LL2', 'Team LL3', /* ... 17 outros times */],
    'Bundesliga': ['Team BL1', 'Team BL2', 'Team BL3', /* ... 15 outros times */],
    'Serie A (Itália)': ['Team SA1', 'Team SA2', 'Team SA3', /* ... 17 outros times */],
    'Ligue 1': ['Team L1_1', 'Team L1_2', 'Team L1_3', /* ... 17 outros times */],
  };

  private betStyles: string[] = [
    'Back',
    'Dupla chance',
    'Mais/Menos',
    'Cartões'
  ];

  private multipleOrSimple: string[] = [
    'Multipla',
    'Simples',
  ];

  getTeamsByCompetition(competition: string): string[] {
    return this.teams[competition] || [];
  }

  getBetStyles(): string[] {
    return this.betStyles;
  }

}
