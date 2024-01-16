
let compra = "n"


if (compra === "vendido" ){

vendido()

function vendido(){
    torra()
    injetarPao()
    entregar()
    entregue()
}

    function torra(){
        console.log("Etapa 1")
        console.log("Pão torrando")
}
    function injetarPao(){
        console.log("Etapa 2")
        console.log("Preparando o Pão")
}
    function entregar(){
        console.log("Etapa 3")
        console.log("O pão ja esta sendo entregue ")
}
    function entregue(){
        console.log("Etapa 4")
        console.log("O pão foi entregue")
}
/*console.log("Etapa 5")
    console.log("Fim do pedido")
*/
}
else {
    console.log("Pedido não foi feito")
}


/*createStringConnection("db_products", "adimarck", "9876")

function createStringConnection(databaseName, user, pass){
    console.log(`coneect:DBCONNECT;user=${user};pass=${pass};initial_databese=${databaseName}`) //inerpolação de instrings , subustiu o valor da string pela função que esta fora e vc consegue mistura e chamar função sem ter que contatenar
}*/