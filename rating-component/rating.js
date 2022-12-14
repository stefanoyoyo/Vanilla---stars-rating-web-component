import { OpenComponentService } from '../services/openComponent.service.js';

export class RatingComponent {
  COMPONENT_NAME = 'rating-component';

  constructor() {
    this.openComponent = new OpenComponentService();
  }

  /**Method to get the this component html's code */
  async getComponent() {
    console.log('rating works');
    const html = await (await fetch('./rating-component/rating.html')).text();
    await this.onInit();

    return html;
  }

  // #egion on init

  async onInit() {
    const prom = this.getComponentDOMnodes([
      'star1',
      'star2',
      'star3',
      'star4',
      'star5',
    ]);
    /**TODO: capire perchè quando uso await su prom, ottento un array di valori nulli! */
    prom.then(async (res) => {   
      await this.applyLIsteners(res);
    });
  }

  /**Getting the specified nodes from the DOM  */
  async getComponentDOMnodes(nodeIds) {
    if (nodeIds == null) return [];
    if (nodeIds.length === 0) return [];
    const DOMelements = [];
    const prom = new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        nodeIds.forEach((nodeId) => {
          const star = document.getElementById(nodeId);
          DOMelements.push(star);
        });
        if (DOMelements.length === nodeIds.length) {
          clearInterval(interval);
          resolve(DOMelements);
        }
      }, 1000);      
    });

    return prom;
  }

  async applyLIsteners(DOMelements) {
    if (DOMelements == null) return;
    DOMelements.forEach((node, index) => {
      node.addEventListener('click', async () => {
        let componentView = ''; 
        if (index === 0) componentView = await this.openDissatisfiedForm();
        if (index === 3) componentView = await this.openSatisfiedForm();
        if (index === 4) componentView = await this.openSatisfiedForm();
        if (index === 1 || index === 2) {
          componentView = this.manageNeutralChoices();
        }
        document.getElementById('rating-result').innerHTML = componentView;
      });
    })
  }

  manageNeutralChoices() {
    const config = {
      text: {
        style: {
          display: 'none'
        }
      }
    };
    setTimeout(() => { this.configurateComponent(config); }, 0);
    
    return '';
  }

  async openDissatisfiedForm () {
    const config = {
      logo: {
        style: {
          width : '100px',
          height : '100px'
        }
      },
      text: {
        textAboveStarts: '',
        textUnderStars: "Desideriamo che i nostri clienti siano soddisfatti al 100%. Per favore, facci sapere perche' hai avuto un'esperienza negativa, in modo da poter migliorare il nostro servizio.",
        style: {
          display: 'flex',
          fontSize: '14px',
          fontFamily: 'Inter,Helvetica,Arial,sans-serif',
          fontWeight: 400,
          lineHeight: '17px',
          letterSpacing: '0.00938em'
        }
      },
      raring: {
        style: {
        }
      }
    };
    this.configurateComponent(config);

    return this.openComponent.open('dissatisFieldForm')
  }

  async openSatisfiedForm() {
    const config = {
      logo: {
        style: {
          width : '100px',
          height : '100px'
        }
      },
      text: {
        textAboveStarts: '',
        textUnderStars: 'Lasciaci una recensione, ci aiuterà crescere e a servire meglio i nostri clienti come te.',
        style: {
          display: 'flex',
          fontSize: '18px'
        }
      },
      raring: {
        style: {
          display: 'none',
        }
      }
    };
    // document.getElementById('rating-component').style.display = 'none';
    this.configurateComponent(config);
    return this.openComponent.open('satisfiedField');
  }
  // #endregion

  /**Method to apply the specified style to the elements of this component */
  configurateComponent(config = null) {
    if (config == null) return;
    // Ridimensiono logo e testo
    const ratingLogo = document.getElementById('rating-logo'); 
    const ratingAboveText = document.getElementById('rating-text-above-id'); 
    const ratingUnderText = document.getElementById('rating-text-under-id'); 
    const ratingStars = document.getElementById('rating-stars');
    ratingLogo.style.width = config?.logo?.style?.width;
    ratingLogo.style.height = config?.logo?.style?.height;
    // Cambio il testo e stile del testo
    ratingAboveText.innerHTML = config?.text?.textAboveStarts ?? ratingAboveText.innerHTML; 
    ratingUnderText.innerHTML = config?.text?.textUnderStars ?? ratingUnderText.innerHTML; 
    ratingUnderText.style.fontSize = config?.text?.style?.fontSize;
    ratingUnderText.style.fontFamily = config?.text?.style?.fontFamily;
    ratingUnderText.style.fontWeight = config?.text?.style?.fontWeight;
    ratingUnderText.style.lineHeight = config?.text?.style?.lineHeight;
    ratingUnderText.style.letterSpacing = config?.text?.style.letterSpacing;
    //Nascondo / visualizzo le stelline
    ratingStars.style.display = config?.raring?.style?.display;
    ratingUnderText.style.display = config?.text?.style?.display;
  }

  // #region start satisfied dissatisfied forms 



  // #endregion 
}
