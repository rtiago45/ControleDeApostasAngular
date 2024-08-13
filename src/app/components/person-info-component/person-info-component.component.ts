import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-info',
  templateUrl: '../../components/person-info-component/person-info-component.component.html',
  styleUrls: ['../../components/person-info-component/person-info-component.component.css']
})
export class PersonInfoComponent implements OnInit {
  @Input() personId: string = '1';  // Default to '1' as per your backend logic
  person!: Person;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    // Initial load or can be left empty
  }

  loadPersonInfo(): void {
    this.personService.getPersonById(this.personId).subscribe((data: Person) => {
      this.person = data;
    });
  }
}
