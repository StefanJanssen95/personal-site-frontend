import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-grid-item',
  styleUrl: 'app-grid-item.scss',
  shadow: false,
})
export class AppGridItem {
  render() {
    return (
      <div class="grid-item">
        <slot></slot>
      </div>
    );
  }
}
