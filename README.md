# nextjs

Study with Next.js

Estudos com Next.js

# O que é Next.js
- É um framework de React
- Permite várias opções de renderização, incluindo Client Side Rendering (CSR), Server Side Rendering (SSR) e Static Site Generation (SSG), sendo Server Rendered por Default.

Server Side Rendering (SSR): Nesse modelo, a renderização inicial é feita no servidor, que envia o HTML renderizado para o cliente. Isso é benéfico para melhorar o tempo de carregamento inicial e o SEO, uma vez que os motores de busca podem indexar o conteúdo renderizado no servidor.

Static Site Generation (SSG): Nesse modelo, as páginas são renderizadas no momento da construção e o HTML estático é gerado. Isso é excelente para melhorar o desempenho, pois os usuários recebem conteúdo estático que pode ser servido de maneira rápida por uma CDN (Content Delivery Network).

Incremental Static Regeneration: O Next.js também introduziu o conceito de Incremental Static Regeneration, que combina elementos do SSG e do SSR. Isso permite que as páginas sejam pré-renderizadas no momento da construção e, em seguida, sejam revalidadas e atualizadas sob demanda, mantendo o conteúdo atualizado sem a necessidade de uma nova renderização completa.