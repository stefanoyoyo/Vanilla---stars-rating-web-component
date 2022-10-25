export class DissatisfiedComponent {
  /**Method to get the this component html's code */
  async getComponent() {
    console.log('dissatisfied works');
    const html = await (await fetch('./dissatisfied-component/dissatisfied.html')).text();
    // await this.onInit();

    return html;
  }
}
