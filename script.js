
import { RatingComponent } from './rating-component/rating.js';

window.addEventListener('load', async function () {
  const appBody = document.getElementById('app-body');
  const rating = new RatingComponent();
  appBody.innerHTML = await rating.getComponent();
});