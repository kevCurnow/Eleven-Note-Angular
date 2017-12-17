import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NotesService } from '../../../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../../models/Note';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  note: Note;

  private _editNoteForm: FormGroup;
  constructor(private _form: FormBuilder, private _notesService: NotesService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._notesService.getNote(p.get('id')).subscribe((singleNote: Note) => {
        this.note = singleNote;
        this.createForm();
      });
    });
  }
  ngOnInit() {
  }

  createForm() {
    this._editNoteForm = this._form.group({
      NoteId: new FormControl(this.note.NoteId),
      IsStarred: new FormControl(this.note.IsStarred),
      Title: new FormControl(this.note.Title),
      Content: new FormControl(this.note.Content)
    });
  }

  onSubmit(form) {
    const updateNote: Note = {
      NoteId: form.value.NoteId,
      Title: form.value.Title,
      Content: form.value.Content,
      IsStarred: form.value.IsStarred
    };
    this._notesService.updateNote(updateNote).subscribe(d => {
      this._router.navigate(['notes']);
    });
  }


}
