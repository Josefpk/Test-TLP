import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-wiki',
  templateUrl: './view-wiki.component.html',
  styleUrls: ['./view-wiki.component.scss']
})
export class ViewWikiComponent implements OnInit {

  selected = '';
  languages = [
    {value: 'ES', viewValue: 'Español'},
    {value: 'EN', viewValue: 'English'},
    {value: 'CH', viewValue: '中國人'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  pageInConstruction(){
    alert('Page in Construction');
  }

}
