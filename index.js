
const { select , input , checkbox } = require('@inquirer/prompts')

let mensagem = "Bem vindo ao App de metas!";

let meta = {
    value: "Tomar 3L de água por dia",
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta: "})

    if(meta.length == 0) {
       mensagem = "A meta nao pode ser vazia!"
       return 
    }

    metas.push(
        {value: meta, checked: false  }
    )

    mensagem = "Meta cadastrada com sucesso!"
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })

    if (respostas.length == 0){
       mensagem = "Nenhuma meta selecionada!"
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
       const meta = metas.find((m) => {
        return m.value == resposta
       })

       meta.checked = true
    })

    mensagem = "Meta(s) marcada(s) como concluida(s)"
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if (realizadas.length == 0){
        mensagem = "Nao existem metas realizadas!"
        return
    }

    await select({
        message: "Metas realizadas:" + realizadas.length,
        choices: [...realizadas]
    })
}

const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })

    if (abertas.length == 0){
        mensagem = "Nao existem metas abertas!"
        return 
    }

    await select ({
        message: "Metas abertas:" + abertas.length,
        choices: [...abertas]
    })
}

const DeletarMetas = async () => {
      
    const MetasDesmarcadas = metas.map((meta) => {
        return { value: meta.value , checked: false , }
    })

    const ItensPara_deletar= await checkbox({
        message: "Selecione  item para deletar",
        choices: [...MetasDesmarcadas],
        instructions: false,
    })

    if (ItensPara_deletar.length == 0){
        mensagem = "Nenhum item para deletar"
        return 
    }

    ItensPara_deletar.forEach((item) => {
        metas.filter((meta) => {
           return metas.value != item 
        })
    }) 

    mensagem = "Meta(s) deleta(s) com sucesso!"
}

const mostrarMensagem = () => {
    console.clear();

    if (mensagem != ""){
        console.log(mensagem)
        console.log("")
        mensagem = ""
    }
}

const start = async () => {
     while (true){
        mostrarMensagem()

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
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Deletar metas",
                    value: "deletar"
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
                break
            case "listar":
                await listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "deletar":
                    await DeletarMetas()
                    break
            case "sair":
                console.log("Ate a proxima!")
                return 
        }
     }
}

start();  