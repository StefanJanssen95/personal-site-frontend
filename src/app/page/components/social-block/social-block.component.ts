import {Component} from '@angular/core';
import {Social} from '../../../shared/enums/social.enum';
import {SocialAccount} from '../../../shared/models/social-account';

@Component({
  selector: 'sj-social-block',
  templateUrl: 'social-block.component.html',
  styleUrls: ['social-block.component.scss']
})

export class SocialBlockComponent {
  public socials: Array<SocialAccount> = [
    {
      platform: Social.Discord,
      name: 'Codex404',
      link: null
    },
    {
      platform: Social.Github,
      name: 'StefanJanssen95',
      link: 'https://github.com/StefanJanssen95'
    },
    {
      platform: Social.LinkedIn,
      name: 'StefanJanssen',
      link: 'https://www.linkedin.com/in/stefanjanssenit/'
    },
    {
      platform: Social.Email,
      name: 'contact@stefanjanssen.nl',
      link: null
    },
  ];

  constructor() {
  }
}
