import { Component, VERSION } from '@angular/core';
import { Product } from './product.model';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `
  //   Version = {{version.full}} <br/>
  //   <input type="file" (change)="upload($event.target.files)" />
  //   Upload Percent: {{percentDone}}% <br />
    
  //   <ng-container *ngIf="uploadSuccess">
  //     Upload Successful
  //   </ng-container> 
  // `,
})
export class AppComponent {

  //  percentDone: number;
  //  uploadSuccess: boolean;

  // constructor(
  //   private http: HttpClient,
  //   ) { }

  //   version = VERSION
  
  //   upload(files: File[]){
  //     this.uploadAndProgress(files);
  //   }

  //   basicUploadSingle(file: File){
  //     this.http.post('https://file.io', file)
  //       .subscribe(event => {
  //         console.log('done')
  //       })
  //   }
  changeListener(event: Event) : void {
    this.readThis(event.target);
  }

  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0]; 
    var myReader:FileReader = new FileReader();

    myReader.onloadend = function(e){
      // you can perform an action with readed data here
      console.log(myReader.result);
    }

    myReader.readAsText(file);
  }


  widthImg = 10;
  name = 'store';
  age = 18
  btnDisabled = true;
  person = {
    name: 'dani',
    age: 20,
  }
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }
  register = {
    name: '',
    email: '',
    password: ''
  }

  toggleButton() {
    this.btnDisabled= !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  // |
  names: string[] = ['nico', 'juli'];
  newName = '';

  addName() {
    this.names.push(this.newName);
    this.newName= '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register);
  }

  products: Product[] = [ // product es el tipado
    {
      name: 'toy',
      price: 500,
      image: 'https://img.freepik.com/foto-gratis/tabla-cortar-madera-rodeada-platos-pasta-e-ingredientes-mesa_23-2148246798.jpg'
    },
    {
      name: 'food',
      price: 550,
      image: 'https://img.freepik.com/foto-gratis/tabla-cortar-madera-rodeada-platos-pasta-e-ingredientes-mesa_23-2148246798.jpg'
    },
    {
      name: 'tool',
      price: 450,
      image: 'https://img.freepik.com/foto-gratis/tabla-cortar-madera-rodeada-platos-pasta-e-ingredientes-mesa_23-2148246798.jpg'
    },
    {
      name: 'shoe',
      price: 350,
      image: 'https://img.freepik.com/foto-gratis/tabla-cortar-madera-rodeada-platos-pasta-e-ingredientes-mesa_23-2148246798.jpg'
    },
    {
      name: 'shampoo',
      price: 200,
      image: 'https://img.freepik.com/foto-gratis/tabla-cortar-madera-rodeada-platos-pasta-e-ingredientes-mesa_23-2148246798.jpg'
    }
  ]
}


