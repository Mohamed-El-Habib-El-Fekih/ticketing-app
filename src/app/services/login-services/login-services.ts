import { Injectable } from '@angular/core';
import { Worker } from '../../models/worker.model';
@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  w! : Worker;  
  getWorkers(): Worker[] {
    return this.workers;
  }
  currentWorker(worker: Worker) {
    this.w = worker;
  }
  workers: Worker[] = [
  { CIN: "12345678",
    nom: "Ben Ali",
    prenom: "Ahmed",
    phone: "20123456",
    email: "ahmed.benali@example.com",
    password: "pass123",
    ImageSrc: "",
    isAccpeted: true,
    status: false,
    role: "Stagiaire",
    Note: "Very professional chef, excellent in Italian cuisine."},
  { CIN: "87654321",
    nom: "Trabelsi",
    prenom: "Sofia",
    phone: "98765432",
    email: "sofia.trabelsi@example.com",
    password: "pass456",
    ImageSrc: "",
    isAccpeted: true,
    status: false,
    role: "Chef",
    Note: "Great creativity in desserts but sometimes slow under pressure."},
  { CIN: "11223344",
    nom: "Khelifi",
    prenom: "Omar",
    phone: "55667788",
    email: "omar.khelifi@example.com",
    password: "pass789",
    ImageSrc: "",
    isAccpeted: true,
    status: false,
    role: "CTO",
    Note: "Still training, needs improvement in kitchen organization."},
  { CIN: "55667788",
    nom: "Masmoudi",
    prenom: "Yasmine",
    phone: "22334455",
    email: "yasmine.masmoudi@example.com",
    password: "pass321",
    ImageSrc: "",
    isAccpeted: true,
    status: false,
    role: "Employee",
    Note: "Excellent teamwork and very consistent performance."},
  { CIN: "99887766",
    nom: "Jaziri",
    prenom: "Karim",
    phone: "66778899",
    email: "karim.jaziri@example.com",
    password: "pass654",
    ImageSrc: "",
    isAccpeted: true,
    status: false,
    role: "Chef",
    Note: "Highly skilled chef, strong leadership in kitchen."}];
}
