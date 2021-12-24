import { Note } from "./models/Note";
import fs from 'fs';

const addNote = (noteToAdd: Note) => {
    var notes = loadNotes();

    const duplicate = notes.find((note) => note.title === noteToAdd.title);

    if(duplicate) {
        console.error("Note with title: " + noteToAdd.title + " already exists - Not adding.");
    }
    else {
        notes.push(noteToAdd);
        saveNotes(notes);
    }
}

const saveNotes = (notes: Note[]) => {
    const serializedNotes = JSON.stringify(notes);
    fs.writeFileSync('notes.json', serializedNotes);
}

const loadNotes = (): Note[] => {
    try {
        const buffer = fs.readFileSync("notes.json");
        const jsonData = buffer.toString();
        return JSON.parse(jsonData);
    }
    catch (ex: any) {
        console.error("notes.json does not exist - Initialising empty notes list...");
        return [];
    }
}

const removeNote = (titleToRemove:string) => {
    const notes = loadNotes();
    const newList = notes.filter((note) => note.title !== titleToRemove);

    if(newList.length === notes.length) {
        console.log("Note not found!");
    }
    else {
        saveNotes(newList);
        console.log("Note removed!");
    }
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => console.log("Title: " + note.title + " Description: " + note.description));
}

const readNote = (noteTitle:string) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === noteTitle);

    if(!note){
        console.error("Note with title: " + noteTitle + " does not exist");
    }
    else {
        console.log("Title: " + note.title + " Description: " + note.description)
    }
}

export { addNote, removeNote, listNotes, readNote };