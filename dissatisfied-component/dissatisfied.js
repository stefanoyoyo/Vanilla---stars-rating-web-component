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
      console.log('email send clicked');
      const data = this.getFormData();
      console.log(data)
    });
  }

  // #region get form data 

  getFormData() {
    const name = document.getElementById('name')?.innerHtml;
    const email = document.getElementById('email')?.innerHtml;
    const telehone = document.getElementById('telephone')?.innerHtml;
    const review = document.getElementById('review')?.innerHtml;

    return {
      name: name,
      email: email,
      telehone: telehone,
      review: review,
    };
  }

  // #endregion 

}
