import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-profile-card',
  styleUrl: 'app-profile-card.css',
  shadow: false,
})
export class AppProfileCard {

  private birthDate = new Date('1995-09-15 00:00+2');

  getAge(): number {
    console.log(this.birthDate);
    const otherDate = new Date();

    let years = (otherDate.getFullYear() - this.birthDate.getFullYear());

    if (otherDate.getMonth() < this.birthDate.getMonth() ||
      otherDate.getMonth() == this.birthDate.getMonth() && otherDate.getDate() < this.birthDate.getDate()) {
      years--;
    }

    return years;
  }

  render() {
    return (
      <div class="profile-card">
        <div class="profile-card__image-container">
          <img class="profile-card__image" src="/assets/images/avatar.svg"/>
        </div>
        <div class="profile-card__about">
          <span class="profile-card__about-title">Age</span>
          <p>{this.getAge()}</p>
        </div>
        <div class="profile-card__about">
          <span class="profile-card__about-title">Work</span>
          <p>Software Developer</p>
        </div>
      </div>
    );
  }

}
