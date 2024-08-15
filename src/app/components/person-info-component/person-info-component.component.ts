import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: '../../components/person-info-component/person-info-component.component.html',
  styleUrls: ['../../components/person-info-component/person-info-component.component.css']
})
export class PersonInfoComponent implements OnInit {
  showFullInfo: boolean = true;
  @Input() personId: string = '1';
  person!: Person;

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.loadPersonInfo();
  }

  loadPersonInfo(): void {
    this.personService.getPersonById(this.personId).subscribe((data: Person) => {
      this.person = data;
    });
  }

  navigateToHomePage(): void {
    this.router.navigate(['/']);
  }
}
