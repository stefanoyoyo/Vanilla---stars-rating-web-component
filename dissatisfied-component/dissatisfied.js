export class DissatisfiedComponent {
  /**Method to get the this component html's code */
  async getComponent() {
    console.log('dissatisfied works');
    const html = await (await fetch('./dissatisfied-component/dissatisfied.html')).text();
    this.onInit();

    return html;
  }

  
  onInit() {
    // Timeout necessario altrimenti i componenti non vengono trovato sul DOM
    setTimeout(() => {      
      this.listenEmailSend();
    }, 0);
  }

  listenEmailSend() {
    const component = document.getElementById('email-send');
    component.addEventListener('click', () => {
      /**CAPIRE PERCHè NON FUNZIONA IL CLICK */
      console.log('email send clicked')
    });
  }

}
