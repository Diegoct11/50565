
import antlr4 from 'antlr4';


export default class ColaLangVisitor extends antlr4.tree.ParseTreeVisitor {

	visitPrograma(ctx) {
	  return this.visitChildren(ctx);
	}


	visitComandos(ctx) {
	  return this.visitChildren(ctx);
	}


	visitOperacion(ctx) {
	  return this.visitChildren(ctx);
	}


	visitCrear(ctx) {
	  return this.visitChildren(ctx);
	}


	visitEncolar(ctx) {
	  return this.visitChildren(ctx);
	}


	visitDesencolar(ctx) {
	  return this.visitChildren(ctx);
	}


	visitVerPrimero(ctx) {
	  return this.visitChildren(ctx);
	}


	visitLista(ctx) {
	  return this.visitChildren(ctx);
	}


	visitValor(ctx) {
	  return this.visitChildren(ctx);
	}


	visitNumero(ctx) {
	  return this.visitChildren(ctx);
	}


	visitTexto(ctx) {
	  return this.visitChildren(ctx);
	}


	visitNombre(ctx) {
	  return this.visitChildren(ctx);
	}



}