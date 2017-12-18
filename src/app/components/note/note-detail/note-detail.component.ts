import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../services/notes.service';
import { Note } from '../../../models/note';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  note: Note;

  constructor(private _notesService: NotesService, private _activatedRoute: ActivatedRoute) {
   
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._notesService.getNote(routeData.get('id')).subscribe((singleNote: Note) => {
        this.note = singleNote;
      });
    });
  }
}
