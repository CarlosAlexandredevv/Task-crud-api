# Desafio 01 Formação Node.js: API de Gerenciamento de Tarefas

Fala, Dev! 😎

Sejam bem-vindos ao meu projeto desenvolvido como parte do desafio da formação de Node.js. Aqui, apliquei os conhecimentos aprendidos e fui além para construir uma API completa de gerenciamento de tarefas (*tasks*), com direito a operações CRUD e importação de tarefas via CSV.

# Tecnologias Utilizadas

- **Node.js**: O ambiente de execução para criar a API.
- **CSV**: Para manipulação de dados, permitindo a importação de tasks em massa.
- **File System (fs)**: Módulo nativo do Node.js utilizado para leitura e escrita de arquivos.
- **UUID**: Biblioteca utilizada para gerar identificadores únicos para as tasks.
  
## Funcionalidades da API

Aqui estão as funcionalidades que implementei:

- **Criação de uma Task**
- **Listagem de todas as tasks**, com a possibilidade de realizar pesquisas passando parâmetros (`title` e `description`)
- **Atualização de uma Task pelo `id`**
- **Remoção de uma Task pelo `id`**
- **Marcar/Desmarcar uma Task como completa**
- **Importação de Tasks em massa via CSV**

## Estrutura de uma Task

Cada task tem a seguinte estrutura:

- `id`: Identificador único da task
- `title`: Título da task
- `description`: Descrição detalhada da task
- `completed_at`: Data de conclusão da task (inicialmente `null`)
- `created_at`: Data de criação da task
- `updated_at`: Data da última atualização da task

## Rotas Implementadas

### 1. **Criar uma Task**
- **POST `/tasks`**
- Envia `title` e `description` no body para criar uma nova task. Os campos `id`, `created_at`, `updated_at` e `completed_at` são gerados automaticamente.

### 2. **Listar todas as Tasks**
- **GET `/tasks`**
- Retorna todas as tasks cadastradas. Também é possível buscar tasks específicas filtrando por `title` ou `description`.

### 3. **Atualizar uma Task**
- **PUT `/tasks/:id`**
- Atualiza o `title` e/ou `description` de uma task pelo `id`. A API valida se o `id` existe antes de atualizar.

### 4. **Remover uma Task**
- **DELETE `/tasks/:id`**
- Remove uma task pelo `id`, com validação prévia de existência no banco de dados.

### 5. **Marcar Task como Completa**
- **PATCH `/tasks/:id/complete`**
- Marca/desmarca uma task como completa. Se ela já estiver completa, volta ao estado "normal". Validação do `id` também é feita.

### 6. **Importação de Tasks via CSV**
A importação em massa de tasks é feita por um arquivo CSV, utilizando streams. Para mais detalhes sobre como realizar essa operação, consulte a documentação [aqui](https://www.notion.so/Cria-o-via-CSV-com-Stream-21ba6d279991473792787d9265212181?pvs=21).

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/desafio-nodejs-api-tasks.git

2. Acesse a pasta do projeto::
   ```bash
   cd desafio-nodejs-api-tasks
   
3. Instale as dependências 
   ```bash
   npm install

4. Inicie a API
   ```bash
   npm run dev   
