import { TestimonialComponent } from './video-testimonial/testimonial.js';

export class SatisfiedComponent {
  /**Method to get the this component html's code */
  async getComponent() {
    console.log('satisfied works');
    const html = await (await fetch('./satisfied-component/satisfied.html')).text();
    this.onInit();

    return html;
  }

  onInit() {
    // Timeout necessario altrimenti i componenti non vengono trovato sul DOM
    setTimeout(() => {      
      this.listenGoToGoogle();
      this.listenGoToTestimonials();
    }, 0)
  }

  // #region listeners

  listenGoToGoogle() {
    const component = document.getElementById('google-button');
    if(component == null) {
      console.err('Component not yet in DOM');
      return;
    }
    component.addEventListener('click', ()=> {
      console.log('fire go to google');
      window.open('https://www.google.com/search?hl=it-IT&gl=it&q=Zen+Home+Shop,+Via+Euclide,+7,+21050+Lonate+Ceppino+VA&ludocid=17644751623097458454&lsig=AB86z5Wdr3MGc69N2WM60BQu03Ny#lrd=0x478688a63893ffff:0xf4dec01d84b89f16,3')
    });
  }
  
  listenGoToTestimonials() {
    const component = document.getElementById('video-testimonial-button');
    if(component == null) {
      console.err('Component not yet in DOM');
      return;
    }
    component.addEventListener('click', async ()=> {
      const testimonialElement = document.getElementById('video-testimonial-container');
      const testimonial = new TestimonialComponent();
      testimonialElement.innerHTML = await testimonial.getComponent(); 
    });
  }

  // #endregion
}




