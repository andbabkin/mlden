import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mden-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  title: string = 'Malachite Den';
  themes = ['default', 'dark', 'alt1', 'alt2'];
  @Output() themeSelected = new EventEmitter<string>();
  @Output() menuActivated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickTheme(theme) {
    this.themeSelected.emit(theme);
  }

  onClickMenu() {
    this.menuActivated.emit();
  }

}
