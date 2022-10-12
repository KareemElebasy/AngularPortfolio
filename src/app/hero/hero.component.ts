import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
    name:string="Kareem Elebasy"
    jobTitle:string="Front End Developer"

  constructor() { }

  ngOnInit(): void {
  }
}