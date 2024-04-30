class StackNode {
    data: any;
    next: StackNode | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    top: StackNode | null;

    constructor() {
        this.top = null;
    }

    push(data: any): void {
        const newNode = new StackNode(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(): void {
        if (!this.top) {
            console.log("A pilha está vazia.");
            return;
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        poppedNode.next = null;
        console.log("Nó removido:", poppedNode.data);
    }

    display(): void {
        let current = this.top;
        if (!current) {
            console.log("A pilha está vazia.");
            return;
        }
        console.log("Conteúdo da pilha:");
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const stack = new Stack();

function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function menu() {
        console.log("\nEscolha uma opção:");
        console.log("1. Inserir um novo nó");
        console.log("2. Remover um nó");
        console.log("3. Visualizar a pilha");
        console.log("4. Encerrar a aplicação");
        rl.question("Opção: ", (answer) => {
            switch (answer) {
                case "1":
                    rl.question("Digite o valor do nó a ser inserido: ", (data) => {
                        stack.push(data);
                        menu();
                    });
                    break;
                case "2":
                    stack.pop();
                    menu();
                    break;
                case "3":
                    stack.display();
                    menu();
                    break;
                case "4":
                    console.log("Encerrando a aplicação...");
                    rl.close();
                    break;                    
                default:
                    console.log("Opção inválida. Tente novamente.");
                    menu();
                    break;
            }
        });
    }

    menu();
}

main();
