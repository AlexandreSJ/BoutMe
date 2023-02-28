import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  constructor(private renderer: Renderer2) {}
  checkTheme(){
    if(localStorage.getItem('theme')!=null){
      this.renderer.setAttribute(document.body, 'color-theme', localStorage.getItem('theme'))
    }
  }
  clearLS(){
    localStorage.clear()
    
  }
  changeTheme(e){
    if(e.detail.checked){
      localStorage.setItem('theme', 'dark')
    }else{
      localStorage.setItem('theme', 'light')
    }
    this.renderer.setAttribute(document.body, 'color-theme', localStorage.getItem('theme'))
  }

}
