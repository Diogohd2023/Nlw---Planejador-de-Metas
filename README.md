## Planejador de Metas - README
Descrição
Este é um aplicativo de linha de comando simples, desenvolvido em JavaScript, para auxiliar na gestão de metas pessoais ou profissionais. Ele permite ao usuário:

Cadastrar novas metas: Adicionar novas metas a serem alcançadas.
Listar metas: Visualizar todas as metas cadastradas, com a opção de marcar como concluídas.
Ver metas realizadas: Filtrar e exibir apenas as metas que foram marcadas como concluídas.
Ver metas abertas: Filtrar e exibir apenas as metas que ainda não foram concluídas.
Deletar metas: Remover metas que não são mais relevantes.
Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript para fora do navegador.
Inquirer.js: Biblioteca para criar interfaces de linha de comando interativas.
fs: Módulo nativo do Node.js para interagir com o sistema de arquivos.
Como Usar
Pré-requisitos:

Node.js e npm (ou yarn) instalados.
Clonagem do Repositório:

Bash
git clone https://github.com/seu-usuario/planejador-de-metas.git
Use o código com cuidado.

Substitua seu-usuario pelo seu nome de usuário no GitHub.

Instalação das Dependências:

Bash
cd planejador-de-metas
npm install
Use o código com cuidado.

Execução:

Bash
node index.js
Use o código com cuidado.

Funcionamento
Arquivo metas.json: Todas as metas são armazenadas neste arquivo em formato JSON. Ao iniciar o aplicativo, as metas são carregadas deste arquivo.
Menu Interativo: O aplicativo apresenta um menu com as opções disponíveis para o usuário.
Interação com o Usuário: O Inquirer.js é utilizado para coletar as entradas do usuário e exibir as informações de forma clara.
Persistência de Dados: As alterações realizadas nas metas são salvas automaticamente no arquivo metas.json.
Estrutura do Código
Carregamento e Salvamento de Metas: As funções carregarMetas e salvarMetas são responsáveis por ler e escrever as metas no arquivo JSON.
Cadastro de Metas: A função cadastrarMeta adiciona uma nova meta à lista.
Listagem de Metas: As funções listarMetas, metasRealizadas e metasAbertas filtram e exibem as metas de acordo com os critérios.
Deleção de Metas: A função deletarMetas permite que o usuário remova metas da lista.
Interface do Usuário: O loop principal do aplicativo gerencia a interação com o usuário, apresentando o menu e executando as funções correspondentes às opções escolhidas.
Contribuições
Contribuições são bem-vindas! Se você encontrar algum bug ou tiver alguma sugestão de melhoria, por favor, abra um issue ou faça um pull request.

Próximos Passos
Adicionar funcionalidades: Implementar novas funcionalidades como:
Priorização de metas
Lembretes
Integração com calendários
Melhorar a interface: Criar uma interface mais visual e intuitiva.
Testes: Adicionar testes unitários para garantir a qualidade do código.
Observação: Este README é um ponto de partida e pode ser adaptado de acordo com suas necessidades e o nível de detalhamento desejado.

Recomendações:

Formatação: Utilize um estilo de formatação consistente (por exemplo, Markdown) para melhorar a legibilidade do README.
Imagens: Inclua imagens ou capturas de tela para ilustrar o funcionamento do aplicativo.
Licença: Adicione uma licença para definir os termos de uso do código.
Badge: Utilize badges para mostrar a cobertura de testes, a versão do Node.js, etc.
