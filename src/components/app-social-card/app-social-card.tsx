import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-social-card',
  styleUrl: 'app-social-card.css',
  shadow: false,
})
export class AppSocialCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
