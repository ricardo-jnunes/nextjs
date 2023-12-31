# nextjs

Study with Next.js

Estudos com Next.js

# O que é Next.js
- É um framework de React
- Permite várias opções de renderização, incluindo Client Side Rendering (CSR), Server Side Rendering (SSR) e Static Site Generation (SSG), sendo Server Rendered por Default.

Client-side Rendering (CSR): O navegador faz o downaload do mínimo de HTML e JavaScript para a página. Então o JS é usado para atualizar o DOM e renderizar a página. Uma das formas de habilitar CSR é usando hook useEffect() do React no lugar dos métodos  (getStaticProps and getServerSideProps) ou utilizando alguma biblioteca como SWR ou React Query, para buscar os dados e usá-los para montar a página.

Server Side Rendering (SSR): Nesse modelo, a renderização inicial é feita no servidor, que envia o HTML renderizado para o cliente. Isso é benéfico para melhorar o tempo de carregamento inicial e o SEO, uma vez que os motores de busca podem indexar o conteúdo renderizado no servidor. Em todo request, a página HTML é gerada.

Static Site Generation (SSG): Nesse modelo, as páginas são renderizadas no momento da construção/build e o HTML estático é gerado. Isso é excelente para melhorar o desempenho, pois os usuários recebem conteúdo estático que pode ser servido de maneira rápida por uma CDN (Content Delivery Network).

Incremental Static Regeneration: O Next.js também introduziu o conceito de Incremental Static Regeneration, que combina elementos do SSG e do SSR. Isso permite que as páginas sejam pré-renderizadas no momento da construção e, em seguida, sejam revalidadas e atualizadas sob demanda, mantendo o conteúdo atualizado sem a necessidade de uma nova renderização completa.

### Importante sobre App Router
Páginas no diretório app, são Server Rendering por default.
Os métodos getServerSideProps, getStaticProps and getInitialProps foram alterados por uma API mais simples.

- CSR
    Buscando dados pelo lado do cliente, a diretiva `use client` no inicio do arquivos, todos os módulos importados nele e componentes filhos serão considerados como um pacote do lado do cliente.
- SSR 
    No lado do servidor, é usado a API Fetch para realizar as chamadas, assim como para configurar as caches e revalidar comportamentos.

# Configurações
√ Would you like to use TypeScript? ... Yes - É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática 

√ Would you like to use ESLint? ... Yes - É ferramenta de análise estática, para as linguagens Javascript e Typescript, sendo o mais popular do mundo para tais linguagens. As regras do ESLint são customizáveis, cobrindo tanto problemas de qualidade de software como de estilo/formatação. 

√ Would you like to use Tailwind CSS? ... Yes - Framework Componentes UI e utilitários para projetos que usam CSS.

√ Would you like to use `src/` directory? ... Yes - Definição do diretório que terá as páginas, estilos, etc. do restante de arquivos do projeto NextJS.

√ Would you like to use App Router? (recommended) ... Yes - O App Router é um novo módulo Next.js 13, projetado para resolver algumas das limitações da abordagem do Pages Directory (Cada arquivo na pasta pages corresponde a uma rota no aplicativo). Embora o aplicativo do roteador ainda use o diretório de pastas para roteamento, ele faz isso com uma convenção um pouco diferente. o App Router que é um componente de roteamento interno que permite que você navegue entre páginas do aplicativo sem a necessidade de recarregar a página inteira. Você pode usar o componente Link do Next.js para criar links de navegação e o módulo next/router para redirecionar programaticamente

√ Would you like to customize the default import alias? ... No - Usar o default  @/

## Tailwind
Reuso de componentes feitos por [khatabwedaa](https://tailwindcomponents.com/component/e-commerce-home-page)

## GraphQL

`npm install @apollo/client graphql`


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
