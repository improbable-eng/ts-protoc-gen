import {Printer} from "./Printer";
import {generateIndent} from "./util";

export class CodePrinter {
  private indentation: string;
  constructor(private depth: number, private printer: Printer) {
    this.indentation = generateIndent(1);
  }
  indent() {
    this.depth++;
    return this;
  }
  dedent() {
    this.depth--;
    return this;
  }
  printLn(line: string) {
    this.printer.printLn(new Array(this.depth + 1).join(this.indentation) + line);
    return this;
  }

  printEmptyLn() {
    this.printer.printEmptyLn();
    return this;
  }
}
