import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import EntityData from '../../assets/entityData.json';
import EntityMeta from '../../assets/entityMeta.json';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  entityMeta: object;
  entityData: object;
  changedData: object;

  constructor() {
    this.entityMeta = EntityMeta;
    this.entityData = EntityData;
  }

  onSubmit(f: NgForm) {
    // console.log(f);
    let formControls = f.controls;
    // console.log(formControls);

    Object.keys(formControls).forEach( element => {
      // console.log(formControls[element]);
      if (formControls[element].dirty) {
        console.log('Dirty: ', element, ' - ', formControls[element].value);
        console.log('Original: ', this.entityData[element]);
      }
    });

    this.changedData = f.form.value;
  }
}