import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  employee: any;
  positions: string[];
  states: string[];

  constructor(private _formservice: FormService) {
    this.employee = _formservice.getEmployee();
    this.positions = _formservice.getPositions();
    this.states = _formservice.getStates();
  }

  ngOnInit() {}

}
