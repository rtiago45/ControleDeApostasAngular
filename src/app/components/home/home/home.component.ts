import { Bet } from './../../../models/bet.model';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BetService } from '../../../services/bet.service';
import { TeamService } from '../../../services/team.service';
import { Router } from '@angular/router';
import { Game } from '../../../models/game.model';
import { OneEntranceDetail } from '../../../models/entrance.model';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  bets: Bet[] = [];
  newBet: Bet;
  newEntrance: string = '';
  availableTeams: string[] = [];
  competitions: string[] = ['Serie A', 'Serie B', 'Premier League', 'La Liga', 'Bundesliga', 'Serie A (Itália)', 'Ligue 1'];
  multipleOrSimple: string[] = ['Multipla', 'Simples'];
  betStyles: string[] = ['Aposta Multipla', 'Aposta Simples'];
  showCreateBetForm: boolean = false;
  competitionFilter: string = '';
  resultFilter: string = '';
  dateStart: string = '';
  dateEnd: string = '';

  constructor(
    private betService: BetService,
    private teamService: TeamService,
    private router: Router
  ) {
    this.newBet = new Bet(
      '', // id
      0, // value
      0, // odd
      '', // betStyle
      true, // green
      new Game(
        ['', ''], // teams
        '', // competition
        [] // entrances
      )
    );
  }

  ngOnInit(): void {
    this.betStyles = this.teamService.getBetStyles();
  }

  onCompetitionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const competition = target.value;
    this.availableTeams = this.teamService.getTeamsByCompetition(competition) || [];
    this.newBet.game.teams = ['', ''];
  }

  addEntrance(): void {
    if (this.newEntrance) {
      this.newBet.game.entrances.push(new OneEntranceDetail(this.newEntrance));
      this.newEntrance = '';
    }
  }

  addBet(): void {
    console.log('Dados da nova aposta:', JSON.stringify(this.newBet, null, 2));

    this.betService.addBet(this.newBet).subscribe(
      (response) => {
        console.log('Resposta do servidor:', response);
        this.listAllBets();
        this.showCreateBetForm = false;
      },
      (error) => {
        console.error('Erro ao criar aposta', error);
      }
    );
  }

  listAllBets(): void {
    this.betService.listAllBets().subscribe(
      (data: Bet[]) => {
        this.bets = data;
      },
      (error) => {
        console.error('Erro ao listar apostas', error);
      }
    );
  }

  navigateToShowBets(): void {
    this.router.navigate(['/showBets']);
  }

  searchBets(): void {
    const params: any = {
      competition: this.competitionFilter,
      green: this.resultFilter,
      dateStart: this.dateStart,
      dateEnd: this.dateEnd,
    };

    this.betService.listBetsWithParams(params).subscribe((data: Bet[]) => {
      this.bets = data;
    });
  }
}
