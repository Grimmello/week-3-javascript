import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container" id="animalList">
    <div id="title">
      <h1>Zoo</h1>
    </div>
    <animal-list [childAnimalList]="allAnimals" (clickSender)="editAnimal($event)" (clickNewAnimalSender)="showNewAnimal()"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneWithAnimal)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)" [addNewAnimal]="addNewAnimal"  (cancelForm)="closeNewForm()"></new-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null
  addNewAnimal = false
  allAnimals: Animal[] = []

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal
  }
  finishedEditing() {
    this.selectedAnimal = null
  }
  showNewAnimal() {
    this.addNewAnimal = true
  }
  closeForm() {
    this.addNewAnimal = false
  }
  addAnimal(newAnimal: Animal) {
    this.allAnimals.push(newAnimal)
  }
}
