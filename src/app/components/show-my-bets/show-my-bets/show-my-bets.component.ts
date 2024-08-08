import { FormsModule } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Bet } from '../../../models/bet.model';
import { HttpClient } from '@angular/common/http';
import { BetService } from '../../../services/bet.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-my-bets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './show-my-bets.component.html',
  styleUrl: './show-my-bets.component.css'
})
export class ShowMyBetsComponent implements OnInit {
  bets: Bet[] = [];
  competitionFilter: string = '';
  resultFilter: string = '';
  dateStart: string = '';
  dateEnd: string = '';

  constructor(private http: HttpClient, @Inject(BetService) private betService: BetService, private router: Router) { }

  ngOnInit(): void {
    this.getBets();
  }

  getBets() {
    this.betService.listAllBets().subscribe((data: Bet[]) => {
      this.bets = data;
    });
  }

  navigateToHomePage(): void {
    this.router.navigate(['/']);
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
  getEntrancesDescriptions(bet: Bet): string {
    return bet.game.entrances.map((e) => {
      return e.multipleOrSimple;
    }).join(', ');
  }
}
