import ColaLangVisitor from "./generated/ColaLangVisitor.js";

export class CustomColaLangVisitor extends ColaLangVisitor {
    constructor() {
        super();
        this.output = '';
        this.queueName = '';
    }

    visitPrograma(ctx) {
        this.queueName = ctx.nombre().getText();
        this.output += `let ${this.queueName} = [];\n`;
        return this.visitChildren(ctx);
    }

    visitCrear(ctx) {
        const lista = ctx.lista().getText();
        this.output += `${this.queueName} = ${lista};\n`;
    }

    visitEncolar(ctx) {
        const val = ctx.valor().getText();
        this.output += `${this.queueName}.push(${val});\n`;
    }

    visitDesencolar(ctx) {
        this.output += `${this.queueName}.shift();\n`;
    }

    visitVerPrimero(ctx) {
        this.output += `console.log(${this.queueName}[0]);\n`;
    }
}
