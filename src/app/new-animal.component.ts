import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Animal } from './animal.model'


@Component ({
  selector: 'new-animal',
  template: `
  <div class="form" id="newAnimalForm" *ngIf="addNewAnimal">
    <h2>New Animal</h2>
    <div class="form-group">
      <label>Animal Species</label>
      <input #newSpecies required class="form-control">
    </div><br>
    <div class="form-group">
      <label>Animal Name</label>
      <input #newName required class="form-control">
    </div><br>
    <div class="form-group">
      <label>Animal Age</label>
      <input type="number" min="0" #newAge required class="form-control">
    </div><br>
    <label>Animal Diet</label>
    <select #newDiet>
      <option value="Herbivore">Herbivore</option>
      <option value="Omnivore">Omnivore</option>
      <option value="Carnivore">Carnivore</option><br>
    </select><br>
    <div class="form-group"><br>
      <label>Location</label>
      <input #newLocation class="form-control" />
    </div><br>
    <div class="form-group">
      <label>Required Caretakers</label>
      <input type="number" min="0" #newCaretakers required class="form-control">
    </div><br>
    <label>Animal Sex</label>
    <select #newSex >
      <option value="Male">Male</option>
      <option value="Female">Female</option><br>
    </select><br>
    <div class="form-group"><br>
      <label>Likes</label>
      <input #newLikes required class="form-control">
    </div><br>
    <div class="form-group">
      <label>Dislikes</label>
      <input #newDislikes required class="form-control">
    </div><br>
    <a href="#animalList">
      <button class="saveButton" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newLocation.value=''; newCaretakers.value=''; newLikes.value=''; newDislikes.value='' ">Save New Animal</button>
    </a>
    <a href="#animalList">
      <button class="saveButton" (click)="cancelForm()">Cancel</button>
    </a>

  </div><br>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter()
  @Output() cancelFormClicked = new EventEmitter()
  @Input() addNewAnimal: boolean

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes)
    this.newAnimalSender.emit(newAnimal)
  }

  cancelForm() {
    this.cancelFormClicked.emit()
  }
}
