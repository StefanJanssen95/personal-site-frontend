import {Social} from '../enums/social.enum';

export interface SocialAccount {
  platform: Social;
  link: string|null;
  name: string;
}
