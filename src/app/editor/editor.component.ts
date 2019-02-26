import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  metaLabel: string;
  entityLabel: string;
  metaFields: object;

  constructor(private modalService: NgbModal) {
    this.entityMeta = EntityMeta;
    this.entityData = EntityData;
    this.metaLabel = this.entityMeta['label'];
    this.entityLabel = this.entityData['label'];
    this.metaFields = this.entityMeta['field'];
  }

  showModal() {
    // this.modalService.open(content,)
    return;
  }

  onSubmit(f: NgForm) {
    let data = f.form.value;
    let formControls = f.controls;
    let $original = { };

    Object.keys(formControls).forEach( element => {

      if (formControls[element].dirty) {
        if (typeof this.entityData[element] === 'undefined') {
          $original[element] = null;
        } else {
          $original[element] = this.entityData[element];
        }
      }

    });

    Object.assign(data, { $original });

    this.changedData = data;

    this.showModal();
  }
}