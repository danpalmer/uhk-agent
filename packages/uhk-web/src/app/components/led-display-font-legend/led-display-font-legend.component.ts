import { ChangeDetectionStrategy, Component } from "@angular/core";
import { faFont } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "led-display-font-legend",
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./led-display-font-legend.component.html",
    styleUrls: ["./led-display-font-legend.component.scss"],
    host: {
        "class": "container-fluid",
    },
})
export class LedDisplayFontLegendComponent {
    faFont = faFont;

    // Data taken from firmware definition
    // DCLMNEGgBKJHFA
    pinOuts = [
        { pinOut: '01000111100011', character: 'A' },
        { pinOut: '11010010101001', character: 'B' },
        { pinOut: '10000100000011', character: 'C' },
        { pinOut: '11010000101001', character: 'D' },
        { pinOut: '10000111000011', character: 'E' },
        { pinOut: '00000111000011', character: 'F' },
        { pinOut: '11000110000011', character: 'G' },
        { pinOut: '01000111100010', character: 'H' },
        { pinOut: '10010000001001', character: 'I' },
        { pinOut: '11000000100000', character: 'J' },
        { pinOut: '00100101010010', character: 'K' },
        { pinOut: '10000100000010', character: 'L' },
        { pinOut: '01000100110110', character: 'M' },
        { pinOut: '01100100100110', character: 'N' },
        { pinOut: '11000100100011', character: 'O' },
        { pinOut: '00000111100011', character: 'P' },
        { pinOut: '11100100100011', character: 'Q' },
        { pinOut: '00100111100011', character: 'R' },
        { pinOut: '11000011000011', character: 'S' },
        { pinOut: '00010000001001', character: 'T' },
        { pinOut: '11000100100010', character: 'U' },
        { pinOut: '00001100010010', character: 'V' },
        { pinOut: '01101100100010', character: 'W' },
        { pinOut: '00101000010100', character: 'X' },
        { pinOut: '00010000010100', character: 'Y' },
        { pinOut: '10001000010001', character: 'Z' },
        { pinOut: '11001100110011', character: '0' },
        { pinOut: '01000000110000', character: '1' },
        { pinOut: '10001010100001', character: '2' },
        { pinOut: '11000011100001', character: '3' },
        { pinOut: '01000011100010', character: '4' },
        { pinOut: '10100001000011', character: '5' },
        { pinOut: '11000111000011', character: '6' },
        { pinOut: '00010000010001', character: '7' },
        { pinOut: '11000111100011', character: '8' },
        { pinOut: '11000011100011', character: '9' },
        { pinOut: '00000000000000', character: 'space' },
        { pinOut: '00000000001010', character: '"' },
        { pinOut: '11010011001011', character: '$' },
        { pinOut: '00000000010000', character: '\'' },
        { pinOut: '00111011011100', character: '*' },
        { pinOut: '00010011001000', character: '+' },
        { pinOut: '00001000000000', character: ',' },
        { pinOut: '00000011000000', character: '-' },
        { pinOut: '00001000010000', character: '/' },
        { pinOut: '00100000010000', character: '<' },
        { pinOut: '10000011000000', character: '=' },
        { pinOut: '00001000000100', character: '>' },
        { pinOut: '00010010100001', character: '?' },
        { pinOut: '10000110101011', character: '@' },
        { pinOut: '00100000000100', character: '\\' },
        { pinOut: '10000000000000', character: '_' },
        { pinOut: '00000000000100', character: '`' },
        { pinOut: '00100001010000', character: '{' },
        { pinOut: '00010000001000', character: '|' },
        { pinOut: '00001010000100', character: '}' },
        { pinOut: '00010100100000', character: '~' },
    ];
}
