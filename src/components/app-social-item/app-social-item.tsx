import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-social-item',
  styleUrl: 'app-social-item.scss',
  shadow: false,
})
export class AppSocialItem {
  @Prop() icon:'discord'|'steam';

  getIconName(name:'discord'|'steam'){
    return `assets/images/${name}_logo.svg`
  }

  render() {
    return (
      <div class="social-container">
        <img class="social-icon" src={this.getIconName(this.icon)}/>
        <span class="social-text"><slot></slot></span>
      </div>
    );
  }

}
