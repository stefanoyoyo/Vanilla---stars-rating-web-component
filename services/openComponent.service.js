import {SatisfiedComponent} from '../satisfied-component/satisfied.js';
import {DissatisfiedComponent} from '../dissatisfied-component/dissatisfied.js';

export class OpenComponentService {

  async open(componentName) {
    if (componentName == null) return null;
    switch(componentName) {
      case 'dissatisFieldForm': 
        return await this.dissatisFieldForm();          
      case 'satisfiedField': 
        return await this.satisfiedField();
    }  
  }

  // #region open components 

  async dissatisFieldForm() {
    const dissatisfied = new DissatisfiedComponent();
    return await dissatisfied.getComponent();
  }

  async satisfiedField() {
    const satisfied = new SatisfiedComponent();
    return await satisfied.getComponent();
  }

  // #endregion
}



