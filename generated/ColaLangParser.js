// Generated from ColaLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ColaLangListener from './ColaLangListener.js';
import ColaLangVisitor from './ColaLangVisitor.js';

const serializedATN = [4,1,19,103,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,
0,1,0,1,0,1,0,1,1,5,1,32,8,1,10,1,12,1,35,9,1,1,2,1,2,1,2,1,2,3,2,41,8,2,
1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,
1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,69,8,7,10,7,12,7,72,9,7,3,7,74,8,7,1,
7,1,7,1,8,1,8,3,8,80,8,8,1,9,4,9,83,8,9,11,9,12,9,84,1,10,1,10,5,10,89,8,
10,10,10,12,10,92,9,10,1,10,1,10,1,11,1,11,5,11,98,8,11,10,11,12,11,101,
9,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,1,2,0,15,16,18,18,100,
0,24,1,0,0,0,2,33,1,0,0,0,4,40,1,0,0,0,6,42,1,0,0,0,8,48,1,0,0,0,10,54,1,
0,0,0,12,59,1,0,0,0,14,64,1,0,0,0,16,79,1,0,0,0,18,82,1,0,0,0,20,86,1,0,
0,0,22,95,1,0,0,0,24,25,5,1,0,0,25,26,3,22,11,0,26,27,5,2,0,0,27,28,3,2,
1,0,28,29,5,3,0,0,29,1,1,0,0,0,30,32,3,4,2,0,31,30,1,0,0,0,32,35,1,0,0,0,
33,31,1,0,0,0,33,34,1,0,0,0,34,3,1,0,0,0,35,33,1,0,0,0,36,41,3,8,4,0,37,
41,3,10,5,0,38,41,3,12,6,0,39,41,3,6,3,0,40,36,1,0,0,0,40,37,1,0,0,0,40,
38,1,0,0,0,40,39,1,0,0,0,41,5,1,0,0,0,42,43,5,4,0,0,43,44,5,5,0,0,44,45,
3,14,7,0,45,46,5,6,0,0,46,47,5,7,0,0,47,7,1,0,0,0,48,49,5,8,0,0,49,50,5,
5,0,0,50,51,3,16,8,0,51,52,5,6,0,0,52,53,5,7,0,0,53,9,1,0,0,0,54,55,5,9,
0,0,55,56,5,5,0,0,56,57,5,6,0,0,57,58,5,7,0,0,58,11,1,0,0,0,59,60,5,10,0,
0,60,61,5,5,0,0,61,62,5,6,0,0,62,63,5,7,0,0,63,13,1,0,0,0,64,73,5,11,0,0,
65,70,3,16,8,0,66,67,5,12,0,0,67,69,3,16,8,0,68,66,1,0,0,0,69,72,1,0,0,0,
70,68,1,0,0,0,70,71,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,73,65,1,0,0,0,73,
74,1,0,0,0,74,75,1,0,0,0,75,76,5,13,0,0,76,15,1,0,0,0,77,80,3,18,9,0,78,
80,3,20,10,0,79,77,1,0,0,0,79,78,1,0,0,0,80,17,1,0,0,0,81,83,5,16,0,0,82,
81,1,0,0,0,83,84,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,19,1,0,0,0,86,90,
5,14,0,0,87,89,5,17,0,0,88,87,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,
1,0,0,0,91,93,1,0,0,0,92,90,1,0,0,0,93,94,5,14,0,0,94,21,1,0,0,0,95,99,5,
15,0,0,96,98,7,0,0,0,97,96,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,
0,0,0,100,23,1,0,0,0,101,99,1,0,0,0,8,33,40,70,73,79,84,90,99];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ColaLangParser extends antlr4.Parser {

    static grammarFileName = "ColaLang.g4";
    static literalNames = [ null, "'cola'", "'{'", "'}'", "'crear'", "'('", 
                            "')'", "'!'", "'encolar'", "'desencolar'", "'verPrimero'", 
                            "'['", "','", "']'", "'\"'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "LETRA", 
                             "DIGITO", "CARACTER", "SIMBOLO", "WS" ];
    static ruleNames = [ "programa", "comandos", "operacion", "crear", "encolar", 
                         "desencolar", "verPrimero", "lista", "valor", "numero", 
                         "texto", "nombre" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ColaLangParser.ruleNames;
        this.literalNames = ColaLangParser.literalNames;
        this.symbolicNames = ColaLangParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ColaLangParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(ColaLangParser.T__0);
	        this.state = 25;
	        this.nombre();
	        this.state = 26;
	        this.match(ColaLangParser.T__1);
	        this.state = 27;
	        this.comandos();
	        this.state = 28;
	        this.match(ColaLangParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comandos() {
	    let localctx = new ComandosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ColaLangParser.RULE_comandos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1808) !== 0)) {
	            this.state = 30;
	            this.operacion();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion() {
	    let localctx = new OperacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ColaLangParser.RULE_operacion);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.encolar();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.desencolar();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 38;
	            this.verPrimero();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 39;
	            this.crear();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crear() {
	    let localctx = new CrearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ColaLangParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(ColaLangParser.T__3);
	        this.state = 43;
	        this.match(ColaLangParser.T__4);
	        this.state = 44;
	        this.lista();
	        this.state = 45;
	        this.match(ColaLangParser.T__5);
	        this.state = 46;
	        this.match(ColaLangParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	encolar() {
	    let localctx = new EncolarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ColaLangParser.RULE_encolar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(ColaLangParser.T__7);
	        this.state = 49;
	        this.match(ColaLangParser.T__4);
	        this.state = 50;
	        this.valor();
	        this.state = 51;
	        this.match(ColaLangParser.T__5);
	        this.state = 52;
	        this.match(ColaLangParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	desencolar() {
	    let localctx = new DesencolarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ColaLangParser.RULE_desencolar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(ColaLangParser.T__8);
	        this.state = 55;
	        this.match(ColaLangParser.T__4);
	        this.state = 56;
	        this.match(ColaLangParser.T__5);
	        this.state = 57;
	        this.match(ColaLangParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	verPrimero() {
	    let localctx = new VerPrimeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ColaLangParser.RULE_verPrimero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(ColaLangParser.T__9);
	        this.state = 60;
	        this.match(ColaLangParser.T__4);
	        this.state = 61;
	        this.match(ColaLangParser.T__5);
	        this.state = 62;
	        this.match(ColaLangParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ColaLangParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(ColaLangParser.T__10);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14 || _la===16) {
	            this.state = 65;
	            this.valor();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===12) {
	                this.state = 66;
	                this.match(ColaLangParser.T__11);
	                this.state = 67;
	                this.valor();
	                this.state = 72;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 75;
	        this.match(ColaLangParser.T__12);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ColaLangParser.RULE_valor);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.numero();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78;
	            this.texto();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ColaLangParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 81;
	            this.match(ColaLangParser.DIGITO);
	            this.state = 84; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ColaLangParser.RULE_texto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(ColaLangParser.T__13);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 87;
	            this.match(ColaLangParser.CARACTER);
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
	        this.match(ColaLangParser.T__13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ColaLangParser.RULE_nombre);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(ColaLangParser.LETRA);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 360448) !== 0)) {
	            this.state = 96;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 360448) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ColaLangParser.EOF = antlr4.Token.EOF;
ColaLangParser.T__0 = 1;
ColaLangParser.T__1 = 2;
ColaLangParser.T__2 = 3;
ColaLangParser.T__3 = 4;
ColaLangParser.T__4 = 5;
ColaLangParser.T__5 = 6;
ColaLangParser.T__6 = 7;
ColaLangParser.T__7 = 8;
ColaLangParser.T__8 = 9;
ColaLangParser.T__9 = 10;
ColaLangParser.T__10 = 11;
ColaLangParser.T__11 = 12;
ColaLangParser.T__12 = 13;
ColaLangParser.T__13 = 14;
ColaLangParser.LETRA = 15;
ColaLangParser.DIGITO = 16;
ColaLangParser.CARACTER = 17;
ColaLangParser.SIMBOLO = 18;
ColaLangParser.WS = 19;

ColaLangParser.RULE_programa = 0;
ColaLangParser.RULE_comandos = 1;
ColaLangParser.RULE_operacion = 2;
ColaLangParser.RULE_crear = 3;
ColaLangParser.RULE_encolar = 4;
ColaLangParser.RULE_desencolar = 5;
ColaLangParser.RULE_verPrimero = 6;
ColaLangParser.RULE_lista = 7;
ColaLangParser.RULE_valor = 8;
ColaLangParser.RULE_numero = 9;
ColaLangParser.RULE_texto = 10;
ColaLangParser.RULE_nombre = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaLangParser.RULE_programa;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	comandos() {
	    return this.getTypedRuleContext(ComandosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaLangVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaLangParser.RULE_comandos;
    }

	operacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionContext);
	    } else {
	        return this.getTypedRuleContext(OperacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.enterComandos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.exitComandos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaLangVisitor ) {
	        return visitor.visitComandos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaLangParser.RULE_operacion;
    }

	encolar() {
	    return this.getTypedRuleContext(EncolarContext,0);
	};

	desencolar() {
	    return this.getTypedRuleContext(DesencolarContext,0);
	};

	verPrimero() {
	    return this.getTypedRuleContext(VerPrimeroContext,0);
	};

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.enterOperacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.exitOperacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaLangVisitor ) {
	        return visitor.visitOperacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CrearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaLangParser.RULE_crear;
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.exitCrear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaLangVisitor ) {
	        return visitor.visitCrear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EncolarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaLangParser.RULE_encolar;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.enterEncolar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.exitEncolar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaLangVisitor ) {
	        return visitor.visitEncolar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DesencolarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaLangParser.RULE_desencolar;
    }


	enterRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.enterDesencolar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.exitDesencolar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaLangVisitor ) {
	        return visitor.visitDesencolar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VerPrimeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaLangParser.RULE_verPrimero;
    }


	enterRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.enterVerPrimero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.exitVerPrimero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaLangVisitor ) {
	        return visitor.visitVerPrimero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaLangParser.RULE_lista;
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaLangVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaLangParser.RULE_valor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaLangVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaLangParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ColaLangParser.DIGITO);
	    } else {
	        return this.getToken(ColaLangParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaLangVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaLangParser.RULE_texto;
    }

	CARACTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ColaLangParser.CARACTER);
	    } else {
	        return this.getToken(ColaLangParser.CARACTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaLangVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ColaLangParser.RULE_nombre;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ColaLangParser.LETRA);
	    } else {
	        return this.getToken(ColaLangParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ColaLangParser.DIGITO);
	    } else {
	        return this.getToken(ColaLangParser.DIGITO, i);
	    }
	};


	SIMBOLO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ColaLangParser.SIMBOLO);
	    } else {
	        return this.getToken(ColaLangParser.SIMBOLO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ColaLangListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ColaLangVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ColaLangParser.ProgramaContext = ProgramaContext; 
ColaLangParser.ComandosContext = ComandosContext; 
ColaLangParser.OperacionContext = OperacionContext; 
ColaLangParser.CrearContext = CrearContext; 
ColaLangParser.EncolarContext = EncolarContext; 
ColaLangParser.DesencolarContext = DesencolarContext; 
ColaLangParser.VerPrimeroContext = VerPrimeroContext; 
ColaLangParser.ListaContext = ListaContext; 
ColaLangParser.ValorContext = ValorContext; 
ColaLangParser.NumeroContext = NumeroContext; 
ColaLangParser.TextoContext = TextoContext; 
ColaLangParser.NombreContext = NombreContext; 
