import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
  <h2>Current Animals:</h2>
  <br>
  <label>Filter by Age</label>
  <select class="form-control" (change)="onAgeChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="youngAnimals">Young Animals (< 2 years)</option>
    <option value="matureAnimals">Mature Animals (+ 2 years)</option>
  </select>
  <div id="caretakers" class="col-md-4">
  </div>
  <table>
    <tr id="tableHeader">
      <th>Name</th>
      <th>Species</th>
      <th>Age</th>
      <th>Diet</th>
      <th>Location</th>
      <th>Caretakers</th>
      <th>Sex</th>
      <th>Likes</th>
      <th>Dislikes</th>
      <th></th>
    </tr>
    <tr *ngFor="let currentAnimal of childAnimalList | filterAge:filterByAge">
      <td>{{currentAnimal.name}}</td>
      <td>{{currentAnimal.species}}</td>
      <td>{{currentAnimal.age}}</td>
      <td>{{currentAnimal.diet}}</td>
      <td>{{currentAnimal.location}}</td>
      <td>{{currentAnimal.caretakers}}</td>
      <td>{{currentAnimal.sex}}</td>
      <td>{{currentAnimal.likes}}</td>
      <td>{{currentAnimal.dislikes}}</td>
      <td><button (click)="editAnimal(currentAnimal)" class="formButton">Edit</button></td>
    </tr>
  </table>
  <a href="#newAnimalForm">
  <button id="newAnimalButton" (click)="newAnimal()" class="saveButton">Add an Animal</button></a>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[]
  @Output() clickSender = new EventEmitter()
  @Output() clickNewAnimalSender = new EventEmitter()

  editAnimal(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit)
  }

  newAnimal() {
    this.clickNewAnimalSender.emit()
  }

  filterByAge: string = "allAnimals"
  onAgeChange(optionFromMenu) {
    this.filterByAge = optionFromMenu
  }
}
