export class TestimonialComponent {

    /**Method to get the this component html's code */
    async getComponent() {
      const html = await (await fetch('./satisfied-component/video-testimonial/testimonial.html')).text();
      await this.onInit();
      return html;
    }

    async onInit() {
      setTimeout(() => {
        this.listenButtonsClick();
      }, 0)
    }

    listenButtonsClick() {
      const component = document.getElementById('sat-test-buttons');
      if (component == null) return;
      component.addEventListener('click', (event) => {
        // if(event.target)
        console.log('event')
        console.log(event)
      });
    }


}