import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sj-external-link',
  templateUrl: 'external-link.component.html',
  styleUrls: ['external-link.component.scss']
})

export class ExternalLinkComponent {
  @Input() href!: string;

  constructor() {
  }
}
