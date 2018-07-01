import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ContentService } from "./core/content.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class') componentCssClass;

  constructor(
    public overlayContainer: OverlayContainer,
    public content: ContentService
  ) {}

  ngOnInit() {
    this.content.load();
  }

  setTheme(theme) {
    this.componentCssClass = theme.toLowerCase() + '-theme';
    const classList = this.overlayContainer.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) =>
      item.includes('-theme')
    );
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(this.componentCssClass);
  }
}
