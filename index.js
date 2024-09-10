
const { select , input , checkbox } = require('@inquirer/prompts')

let meta = {
    value: "Tomar 3L de água por dia",
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta: "})

    if(meta.length == 0) {
       console.log("A meta nao pode ser vazia!")
       return 
    }

    metas.push(
        {value: meta, checked: false  }
    )
}

const start = async () => {
     while (true){

        const opçao = await select({
            message: "MENU >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opçao){
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                await listarMetas()
                break
            case "sair":
                console.log("Ate a proxima!")
                return 
        }
     }
}

start();