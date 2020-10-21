import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <div class="grid-container">
        <div class="grid-row">
          <div class="grid-column grid-column--wide">
            <app-grid-item>
              <app-profile-card></app-profile-card>
            </app-grid-item>
          </div>
          <div class="grid-column grid-column--wide">
            <app-grid-item>
              <app-summary-card></app-summary-card>
            </app-grid-item>
            <app-grid-item>
              <app-showcase></app-showcase>
            </app-grid-item>
          </div>
          <div class="grid-column  grid-column--narrow">
            <app-grid-item>
              <app-social-card></app-social-card>
            </app-grid-item>
          </div>
        </div>
      </div>
    );
  }
}
