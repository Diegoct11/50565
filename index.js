    import antlr4 from 'antlr4';
    import fs from 'fs';
    import { CharStreams, CommonTokenStream } from 'antlr4';
    import ColaLangLexer from './generated/ColaLangLexer.js';
    import ColaLangParser from './generated/ColaLangParser.js';
    import { CustomColaLangVisitor } from './CustomColaLangVisitor.js';

    const input = fs.readFileSync('input.txt', 'utf8');
    const chars = CharStreams.fromString(input);
    const lexer = new ColaLangLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    tokens.fill();

    // 1. Tabla de tokens
    console.log('== Tokens ==');
    tokens.tokens.forEach(token => {
        if (token.type === -1) return; // ignorar EOF
        if (token.type >= 0 && token.type < ColaLangLexer.symbolicNames.length){
            const symbolicName = ColaLangLexer.symbolicNames[token.type];
            console.log(`${token.text} -> ${symbolicName}`);
        } else {
            console.log(`${token.text} -> <UNKNOWN> (type ${token.type})`);
        }
    });



    // 2. Parser y árbol
    const parser = new ColaLangParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.programa();

    // 3. Árbol sintáctico
    console.log('\n== Árbol sintáctico ==');
    console.log(tree.toStringTree(parser.ruleNames));

    // 4. Interpretación
    const visitor = new CustomColaLangVisitor();
    visitor.visit(tree);
    console.log('\n== Código traducido a JavaScript ==');
    console.log(visitor.output);
