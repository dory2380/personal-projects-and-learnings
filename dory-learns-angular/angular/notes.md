## Angular

Angular is a client-side (browser) JavaScript framework which is used to build engaging and reactive user interfaces.
- client-side: it runs in the browser (not in the servers)
- framework: a bundle of tools which make the development easier.

output: a bunch of JavaScript code.

### Component Driven Development
- define logic once, reuse code

### Installing Angular with the CLI
The Angular Command Line interface makes it easy to create an application that already works, right out of the box. It already follows the best practices.
- set up

`ng new`
The Angular CLI makes it easy to create an application that already works, right out of the box. It already follows our best practices!

`ng generate` Generate components, routes, services and pipes with a simple command. The CLI will also create simple test shells for all of these.

`ng serve` Easily test your app locally while developing.

`Test, Lint` Make your code really shine. Run your unit tests, your end-to-end tests, or execute the official Angular linter with the breeze of a command.

## Binding
`[personList]="persons"` - property binding  
`(click)="onCreatePerson()"` - event binding  
`{{ person }}` - string interpolation  
`[(ngModel)]="enteredPersonName"` two way binding - get current value and write to it
