import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}
  checkTheme(){
    if(localStorage.getItem('theme')!=null){
      this.renderer.setAttribute(document.body, 'color-theme', localStorage.getItem('theme'))
    }else{
      localStorage.setItem('theme','dark')
      this.renderer.setAttribute(document.body, 'color-theme', 'dark')
    }
    if(localStorage.getItem('theme')=='dark'){  
      this.renderer.setAttribute(document.getElementById('checkTheme'), 'checked', 'true')
    }
  }
}
