import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Note } from '../../../models/note';
import { NotesService } from '../../../services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  noteForm: FormGroup;

  constructor(private _form: FormBuilder, private _noteService: NotesService, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.noteForm = this._form.group({
      Title: new FormControl,
      Content: new FormControl,
    });
  }

  onSubmit(form) {
    this._noteService.createNotes(this.noteForm.value).subscribe(data => {
      this._router.navigate(['/notes']);
    });
  }
}