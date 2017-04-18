// BOOLEAN
var boolean:boolean = true;

// NUMBER
var integer:number 	= 2;
var float:number 	= 5.1;
var hex:number		= 0xf00d;
var binary:number 	= 0b1010;
var octal:number	= 0o744;

// STRING
var duplas:string = "Jonathan";
var simples:string = 'Camaro';
var text = `
	<p>Texto com quebra de linha (usando crase)</p>
	<p>duplas: 	${duplas}</p>
	<p>simples: ${simples}</p>
`;

// ARRAY
var fruits:string[] = [
	"Apple",
	"Watermelon",
	"Lemon"
];

console.log(fruits);

var colors:Array<string> = [
	"Blue",
	"Green",
	"Yellow"
];

console.log(colors);

// ENUM
enum Color {Red, Green, Blue}

console.log(Color[0]);

// ANY
var list:any = 23;
console.log(list);
list = "String";
console.log(list);

// VOID
function logNumber(num:number):void{
	alert(num);
}