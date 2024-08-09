
export default function murcielago(codigo) {
    function alterUrl(code) {
        switch (code) {
            case '1':
                return '0';
            case '2':
                return '9';
            case '3':
                return '8';
            case '4':
                return '7';
            case '5':
                return '6';
            case '6':
                return '5';
            case '7':
                return '4';
            case '8':
                return '3';
            case '9':
                return '2';
            case '0':
                return '1';
            case 'a':
                return 'z';
            case 'b':
                return 'y';
            case 'c':
                return 'x';
            case 'd':
                return 'w';
            case 'e':
                return 'v';
            case 'f':
                return 'u';
            case 'g':
                return 't';
            case 'h':
                return 's';
            case 'i':
                return 'r';
            case 'j':
                return 'q';
            case 'k':
                return 'p';
            case 'l':
                return 'o';
            case 'm':
                return 'n';
            case 'n':
                return 'm';
            case 'o':
                return 'l';
            case 'p':
                return 'k';
            case 'q':
                return 'j';
            case 'r':
                return 'i';
            case 's':
                return 'h';
            case 't':
                return 'g';
            case 'u':
                return 'f';
            case 'v':
                return 'e';
            case 'w':
                return 'd';
            case 'x':
                return 'c';
            case 'y':
                return 'b';
            case 'z':
                return 'a';
            default:
                return code;
        }
    }

    let codigo_alternado = "";
    for (let i = 0; i < codigo.length; i++) {
        codigo_alternado += alterUrl(codigo[i]);
    }

    return codigo_alternado;
}

