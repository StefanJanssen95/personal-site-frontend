import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-social-card',
  styleUrl: 'app-social-card.css',
  shadow: false,
})
export class AppSocialCard {

  render() {
    return (
      <div>
        <h2 class="social-title">Profiles</h2>
        <app-social-item icon="discord">Some name</app-social-item>
        <app-social-item icon="steam">Something else</app-social-item>
        <app-social-item icon="discord">Other</app-social-item>
      </div>
    );
  }

}
