import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mden-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Malachite Den';
  themes = ['default', 'alt1', 'alt2', 'alt3'];
  @Output() themeSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClickTheme(theme) {
    this.themeSelected.emit(theme);
  }

}
