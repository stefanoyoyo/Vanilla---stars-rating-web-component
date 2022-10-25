export class SatisfiedComponent {
  /**Method to get the this component html's code */
  async getComponent() {
    console.log('satisfied works');
    const html = await (await fetch('./satisfied-component/satisfied.html')).text();
    // await this.onInit();

    return html;
  }
}
