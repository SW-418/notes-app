# Notes App

Notes app created using Typescript/Node - Allows adding, removing and reading of notes stored in JSON format.

## Commands

First run `npm install`

Add item to list:
`tsc && node dist/app.js add --title="Sawcon" --body="attendee"`

Remove item from list:
`tsc && node dist/app.js remove --title="Sawcon"`

Read all items from list (to console):
`tsc && node dist/app.js list`

Read specific note by title:
`tsc && node dist/app.js read --title="Sawcon"`
