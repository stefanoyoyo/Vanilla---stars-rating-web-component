import { OpenComponentService } from '../services/openComponent.service.js';

export class PageComponent {
  COMPONENT_NAME = 'page-component';

  constructor() {
    this.openComponent = new OpenComponentService();
  }

    /**Method to get the this component html's code */
    async getComponent() {
      console.log('page works');
      const html = await (await fetch('./page-component/page.html')).text();
      await this.onInit();
  
      return html;
    }

    async onInit() {
      const rating = await this.openComponent.open('ratingComponent');
      setTimeout(() => {document.getElementById('rating-component').innerHTML = rating;}, 0);
    }
}
