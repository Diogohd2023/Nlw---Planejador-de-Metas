
const { select } = require('@inquirer/prompts')

const start = async () => {

}


     while (true){

        const opçao = await select({
            message: "MENU >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opçao){
            case "cadastrar":
                console.log("Vamos cadastrar")
            break
            case "listar":
                console.log("Vamos listar")
            break
            case "sair":
                return 
        }
     }
}

start()