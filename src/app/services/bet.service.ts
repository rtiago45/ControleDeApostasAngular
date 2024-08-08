import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OneEntranceDetail } from '../models/entrance.model';
import { Game } from '../models/game.model';
import { Bet } from '../models/bet.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  private apiUrl = 'http://localhost:8080/bets';
  constructor(private http: HttpClient) { }

  createSimpleBet(): Observable<Bet> {
    let entrance = new OneEntranceDetail('Simples');
    let game = new Game(['Corinthians', 'Santos'], 'Paulistão', [entrance]);
    let bet = new Bet('12', 10, 4, 'S', true, game);
    return this.http.post<Bet>(`${this.apiUrl}/insertSimpleBet`, bet);
  }

  listAllBets(): Observable<Bet[]> {
    return this.http.get<Bet[]>(`${this.apiUrl}/all`);
  }

  addBet(bet: Bet): Observable<any> {
    return this.http.post(`${this.apiUrl}/insertSimpleBet`, bet);
  }

  listBetsWithParams(params?: any): Observable<Bet[]> {
    let queryParams = new HttpParams();

    if (params) {
      for (let key in params) {
        if (params.hasOwnProperty(key)) {
          if (key === 'game.competition') {
            queryParams = queryParams.append('game.competition', params[key]);
          } else {
            queryParams = queryParams.append(key, params[key]);
          }
        }
      }
    }
    return this.http.get<Bet[]>(`${this.apiUrl}/betFilter`, {
      params: queryParams,
    });
  }
}
