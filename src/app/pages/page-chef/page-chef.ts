import { Component, NgModule } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar-component/side-bar-component';
import { TopNavComponent } from '../../components/top-nav-component/top-nav-component';
import { ChefService } from '../../services/chef-service';
import { Chef } from '../../models/chef.model';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-page-chef',
  imports: [TopNavComponent,SideBarComponent,CommonModule,FormsModule],
  templateUrl: './page-chef.html',
  styleUrl: './page-chef.css',
})
export class PageChef {
  service = new ChefService();
  chefs = this.service.getChefs();
  chefSelected: Chef | null = null;
  isEditingNote = false;
  editedNote = '';
  getAvatarColor(letter: string): string {
    const colors = [
      '#FF6B6B', '#3669b1', '#29235f', '#3192ee',
      '#6a745d4d', '#2861968f', '#00C9A7', '#C34A36'
    ];

    const index = letter.toUpperCase().charCodeAt(0) % colors.length;
    return colors[index];
  }
  selectChef(chef: Chef) {
    this.isEditingNote = false;
    this.chefSelected = chef;
  }
  editChef(chef: Chef, event: Event) {
    event.stopPropagation();
    this.chefSelected = chef;
    this.editedNote = this.chefSelected!.Note;
    this.isEditingNote = true;
  }
  saveNote() {
    this.chefSelected!.Note = this.editedNote;
    this.isEditingNote = false;
  }
  deleteChef(chef: Chef) {
    this.chefs = this.chefs.filter(c => c.CIN !== chef.CIN);
  }
}
