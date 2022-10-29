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
      document.addEventListener('click', (event) => {
        if(!component.contains( event.target))
        console.log('fire')
        console.log(event)
        const container = document.getElementById('sat-testimonial-container');
        if (container == null) return;
        container.innerHtml = '';
      });
    }


}