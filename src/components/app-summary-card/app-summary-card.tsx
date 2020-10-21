import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-summary-card',
  styleUrl: 'app-summary-card.css',
  shadow: false,
})
export class AppSummaryCard {

  render() {
    return (
      <div>
        <h1 class="title">CodexNotFound</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto assumenda, at blanditiis consequatur delectus fugit inventore iusto non nostrum. Ad ducimus expedita illum mollitia natus neque nulla tenetur veniam.</p>
      </div>
    );
  }

}
