class Mangler {
  program: any;
  constructor(program) {
    this.program = program;
  }
}
// need this since otherwise Mangler isn't used
new Mangler('program');
