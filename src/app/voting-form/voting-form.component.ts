import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-voting-form',
  templateUrl: './voting-form.component.html',
  styleUrls: ['./voting-form.component.css']
})
export class VotingFormComponent implements OnInit {

  nameFC = new FormControl();
  companyFC = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  submitted(){
    console.log('submit button clicked....');
    console.log(this.nameFC.value, this.companyFC.value);
  }

}
