# Star Wars Lib Project
### Demo 
https://star-wars-lib.vercel.app/

### Sobre
Este é um projeto experimental que faz uso da API [swapi.dev](https://swapi.dev/) como servidor REST. Neste projeto foi utilizado uma configuração própria de [webpack](https://github.com/devbrunogs/belplate-react), React para os componentes frontend, Redux e Redux Saga para o gerenciamento de estado e Jest e Enzyme para a realização de testes unitários.

Para a estilização, devido a simplicidade do projeto, foi utilizado CSS Flexbox, tornando mais fácil e rápida a customização sem a necessidade de gerar mais código que o necessário ou até mesmo tornando necessário a importação de libs externas.

Alguns componentes como o Select são customizados e não fazem uso da tag padrão do html. O motivo é poder adicionar mais comportamentos como a exclusão em tempo real de um dado e a manipulação da aparência. 

### Comandos

Instalar dependências

```
npm -i
```

Iniciar Projeto
```
npm run start
```

Iniciar Testes
```
npm run test
```
