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
        console.log(index)
        let componentView = ''; 
        if (index === 0) componentView = await this.openDissatisfiedForm();
        if (index === 3) componentView = await this.openSatisfiedForm();
        if (index === 4) componentView = await this.openSatisfiedForm();
        if (index === 1 || index === 2) {
          // componentView = await this.openComponent.closeComponent('rating-option-result');
          componentView = '';
        }
        // console.log(componentView)
        // const ratingResult = document.getElementById('rating-option-result');
        // ratingResult.innerHTML = componentView;
        document.getElementById('rating-result').innerHTML = componentView;
      });
    })
  }

  async openDissatisfiedForm () {
    // document.getElementById('rating-component').style.width = '10%'
    // document.getElementById('rating-component').style.heigth = '10%'
    const config = {
      logo: {
        style: {
          width : '10%',
          height : '10%'
        }
      },
      text: {
        //innerText: 'Lasciaci una recensione, ci aiuterà crescere e a servire meglio i nostri clienti come te.',
        style: {
          fontSize: '18px'
        }
      },
      raring: {
        style: {
          display: 'none',
        }
      }
    };
    // Ridimensiono logo e testo
    const ratingLogo = document.getElementById('rating-logo'); 
    const ratingText = document.getElementById('rating-text-id'); 
    ratingLogo.style = config.logo.style;
    // Cambio il testo e stile del testo
    ratingText.innerText = config.text.innerText ?? ratingText.innerText; 
    // ratingText.style.fontSize = config.text.style.fontSize;

    return this.openComponent.open('dissatisFieldForm')
  }

  async openSatisfiedForm() {
    document.getElementById('rating-component').style.display = 'none';
    return this.openComponent.open('satisfiedField');
  }
  // #endregion

  // #region start satisfied dissatisfied forms 



  // #endregion 
}
