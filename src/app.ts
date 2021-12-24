import yargs from 'yargs';
import { Note } from './models/Note.js'; // TODO: Fix this to omit the '.js' if possible
import { addNote, removeNote, listNotes, readNote } from './notes.js'; // TODO: Fix this to omit the '.js' if possible

yargs.version('1.0.0')

// Add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
            default: 'note title'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const newNote = new Note(argv.title as string, argv.body as string);
        addNote(newNote);
    }
})

// Remove
yargs.command({
    command: 'remove',
    describe: 'Remove note by title',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log("Removing your note")
        removeNote(argv.title as string)
    }
})

// Read
yargs.command({
    command: 'read',
    describe: 'Read a single note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Reading your note');
        readNote(argv.title as string)
    }
})

// List
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        console.log('Listing all notes');
        listNotes();
    }
})

yargs.parse(process.argv.slice(2))
