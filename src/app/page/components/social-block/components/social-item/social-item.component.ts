import {Component, Input, OnInit} from '@angular/core';
import {SocialAccount} from '../../../../../shared/models/social-account';
import {Social} from '../../../../../shared/enums/social.enum';

@Component({
  selector: 'sj-social-item',
  templateUrl: 'social-item.component.html',
  styleUrls: ['social-item.component.scss']
})

export class SocialItemComponent implements OnInit {
  @Input()
  accountData!: SocialAccount;

  public logoUrl = '';

  constructor() {
  }

  ngOnInit(): void {
    switch(this.accountData.platform) {
      case Social.Discord: this.logoUrl = this.getSocialUrl('discord-logo.svg'); break;
      case Social.Steam: this.logoUrl = this.getSocialUrl(''); break;
      case Social.Github: this.logoUrl = this.getSocialUrl('git-logo.svg'); break;
      case Social.LinkedIn: this.logoUrl = this.getSocialUrl('linkedin-logo.svg'); break;
      case Social.Email: this.logoUrl = this.getSocialUrl('mail-logo.svg'); break;
      default: this.logoUrl = this.getSocialUrl(''); break;
    }
  }

  private getSocialUrl(name: string): string {
    return `assets/images/social/${name}`;
  }
}
