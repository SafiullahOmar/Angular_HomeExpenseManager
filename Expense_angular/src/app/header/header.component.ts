import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  @Output() SideNavToggled=new EventEmitter<boolean>();
  menuButtonStatus:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.menuButtonStatus=!this.menuButtonStatus;
    this.SideNavToggled.emit(this.menuButtonStatus);
  }

}
