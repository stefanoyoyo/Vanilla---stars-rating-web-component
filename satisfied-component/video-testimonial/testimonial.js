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
        // when click out of the box => hide it
        const container = document.getElementsByClassName('sat-testimonial-container');
        if (container == null) return;
        container[0].style.display='none';
        //container[0].style.visibility = 'collapse';
      });
    }


}