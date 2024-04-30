var StackNode = /** @class */ (function () {
    function StackNode(data) {
        this.data = data;
        this.next = null;
    }
    return StackNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
    }
    Stack.prototype.push = function (data) {
        var newNode = new StackNode(data);
        newNode.next = this.top;
        this.top = newNode;
    };
    Stack.prototype.pop = function () {
        if (!this.top) {
            console.log("A pilha está vazia.");
            return;
        }
        var poppedNode = this.top;
        this.top = this.top.next;
        poppedNode.next = null;
        console.log("Nó removido:", poppedNode.data);
    };
    Stack.prototype.display = function () {
        var current = this.top;
        if (!current) {
            console.log("A pilha está vazia.");
            return;
        }
        console.log("Conteúdo da pilha:");
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    };
    return Stack;
}());
var stack = new Stack();
function main() {
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    function menu() {
        console.log("\nEscolha uma opção:");
        console.log("1. Inserir um novo nó");
        console.log("2. Remover um nó");
        console.log("3. Visualizar a pilha");
        console.log("4. Encerrar a aplicação");
        rl.question("Opção: ", function (answer) {
            switch (answer) {
                case "1":
                    rl.question("Digite o valor do nó a ser inserido: ", function (data) {
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
