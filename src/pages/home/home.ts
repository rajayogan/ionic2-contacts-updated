import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Contacts, ContactFieldType} from 'ionic-native';

import { AddcontactPage} from '../addcontact/addcontact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
      contacttobefound = '';
      contactsfound = [];
      search = false;
      ourvalue: ContactFieldType[] = ['displayName'];
      
      
  constructor(public navCtrl: NavController) {
    
  }

savefn() {
   this.navCtrl.push(AddcontactPage);
  }
  
  findfn(val) {
      Contacts.find(this.ourvalue, {filter: val}).then((contacts) => {
          this.contactsfound = contacts;
          alert(JSON.stringify(contacts[0]));
      })
      
      if(this.contactsfound.length == 0)
      this.contactsfound.push({displayName: 'No Contacts found'});  
      this.search = true;    
  }

}
