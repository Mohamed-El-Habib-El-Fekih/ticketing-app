import { Component, NgModule } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar-component/side-bar-component';
import { TopNavComponent } from '../../components/top-nav-component/top-nav-component';
import { LoginServices } from '../../services/login-services/login-services';
import { Worker } from '../../models/worker.model';
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
  service = new LoginServices();
  workers = this.service.getWorkers();
  workerSelected: Worker | null = null;
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
  selectWorker(worker: Worker) {
    this.isEditingNote = false;
    this.workerSelected = worker;
  }
  editWorker(worker: Worker, event: Event) {
    event.stopPropagation();
    this.workerSelected = worker;
    this.editedNote = this.workerSelected!.Note;
    this.isEditingNote = true;
  }
  saveNote() {
    this.workerSelected!.Note = this.editedNote;
    this.isEditingNote = false;
  }
  deleteWorker(worker: Worker) {
    this.workers = this.workers.filter(w => w.CIN !== worker.CIN);
  }
}
