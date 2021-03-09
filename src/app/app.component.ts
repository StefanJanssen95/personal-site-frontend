import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'personal-frontend';

  public theme = 'dark';

  @ViewChild('themeElement') element!: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {
      const preferredScheme = window.getComputedStyle(this.element.nativeElement).getPropertyValue('--prefers-color-scheme').trim();
      if (preferredScheme === 'light') {
        this.theme = 'light';
      } else if (preferredScheme === 'dark') {
        this.theme = 'dark';
      }
    });
  }

  toggleTheme(): void {
    switch (this.theme) {
      case 'light':
        this.theme = 'dark';
        return;
      case 'dark':
        this.theme = 'light';
        return;
    }
  }
}
