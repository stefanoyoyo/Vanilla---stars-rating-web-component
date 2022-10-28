export class TestimonialComponent {

    /**Method to get the this component html's code */
    async getComponent() {
      const html = await (await fetch('./satisfied-component/video-testimonial/testimonial.html')).text();
  
      return html;
    }


}