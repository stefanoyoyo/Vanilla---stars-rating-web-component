export class TestimonialComponent {

    /**Method to get the this component html's code */
    async getComponent() {
      const html = await (await fetch('./satisfied-component/video-testimonial/testimonial.html')).text();
      await this.onInit();
      return html;
    }

    async onInit() {
      setTimeout(() => {
        this.listenButtonsDialogClose();
      }, 0)
    }

    listenButtonsDialogClose() {
      const component = document.getElementById('sat-test-buttons');
      if (component == null) return;
      document.addEventListener('click', (event) => {
        if(component.contains( event.target)) return;
        // when click out of the box => hide it
        const container = document.getElementById('video-testimonial-container');
        if (container == null) return;
        container.style.display='none';
      });
    }


}