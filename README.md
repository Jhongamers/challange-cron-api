### Coodesh-Back-end-Challenge e Front-End
Desafio Back-end Challenge.
NodeJs Challenge 20201030

## Descrição
**Este Projeto foi desenvolvimento de um sistema que baixa todas as autalização de um sistema que fornece uma api para nutricionistas com todas as informações, depois de baixar o arquivo ele tinha que ler os dados uma quantidade grigantesca de dados e salvar 100 deses dados no banco dados no caso eu ultilizei o mongodb, trabalhei com filas, para evitar que consuma muito do processamento pois a aplicação fazia download e tinha que cuidar de extrair os arquivos e ainda gravar, então priorizei uma fila aonde se houve-se novas atualizações ele pedia para esperar na fila até que a atual termina-se, tambem criei um front-end para exibir esses dados da api**

# sobre o desafio
**basicamente buscamos novas atualização do [Open Food Facts](https://br.openfoodfacts.org/data "Open Food Facts") tratamos informações e baixamos a informação para inserir no nosso banco de dados mongodb**


Criamos **CRUD**  junto com os ends-points da api:

`GET /:` Retorna o consumo de cpu do usuario e do servidor e a hora e data"

`PUT /products/:code` é Responsavel por atualizar os dados ultlizando o code

 `DELETE /products/:code` Atualiza o stauts do produto de published para trash

`GET /products/:code` Pega a informação de apenas um produto atraves do codigo

`GET /produtos:` Lista a informação de todos os produtos com paginação limitando 8 por pagina conseguimos ver tambem a informação das paginas.

# Stack:
**Nodejs, React.js, Typescript
express ,Docker, docker-compose,
Mongodb, Vitest, Vite, Styled-Components
**


**clone este repositorio**
``` git clone
 https://github.com/Jhongamers/challange-cron-api.git
```

**na raiz do challange-cron-api  digite composer **

`docker-compose up`


**use este endereço limitado a 8 usuarios:**
` http://localhost:3000/products/`

**endereço com paginação sendo possivel altear:**
` http://localhost:3000/products?page=1`

**Parando aplicação:**



**Somente parar:**` docker-compose stop`
**Para e apagar container:**:` docker-compose down `


## execute os teste unitario

** npm run test**
## Referencia
challenge by coodesh
