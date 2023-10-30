class classeJogo {
    constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

	atacar(){
    	let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "realizou um ataque genérico";
		}
    
    	console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
    
}

let tipoGuerreiro = new classeJogo ("Garen", 22, "guerreiro")
let tipoMago = new classeJogo ("Patolino", 25, "mago")
let tipoMonge = new classeJogo ("Mestre Shi-fu", 60, "monge")
let tipoNinja = new classeJogo ("Naruto", 16, "ninja")
tipoGuerreiro.atacar()
tipoMago.atacar()
tipoMonge.atacar()
tipoNinja.atacar()