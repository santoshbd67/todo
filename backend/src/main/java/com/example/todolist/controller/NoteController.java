package com.example.todolist.controller;

import com.example.todolist.model.Note;
import com.example.todolist.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteController {
    @Autowired
    private NoteRepository noteRepository;

    @GetMapping
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    @PostMapping
    public Note createNote(@RequestBody Note note) {
        return noteRepository.save(note);
    }

    @DeleteMapping("/{id}")
    public void deleteNoteById(@PathVariable Long id) {
        noteRepository.deleteById(id);
    }
}

