import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  filename:String;
  show:boolean=true;
  files: File[] = [];
  test:String="sad";
  test1:String="lad";
  num:any[]=[];

  constructor(){
    this.num=['SOS-CAT','SOS-DOC','Builder-Xml'];
  }

onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
}
 
onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
funs(event){
  var fileName = event.target.files[0].name;
  this.filename=fileName;
  this.show=false;
  console.log(fileName)
}


drop(event:CdkDragDrop<any[]>)
{
  moveItemInArray(this.num,event.previousIndex,event.currentIndex);
}

}
