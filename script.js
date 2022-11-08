
import { RatingComponent } from './rating-component/rating.js';
import { PageComponent } from './page-component/page.js';

window.addEventListener('load', async function () {
  const appBody = document.getElementById('app-body');
  const page = new PageComponent();
  appBody.innerHTML = await page.getComponent();
});