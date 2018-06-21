import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mden-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Malachite Den';

  constructor() { }

  ngOnInit() {
  }

}
