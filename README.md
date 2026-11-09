# Conecta Pernambuco

Crie um site institucional moderno e elegante para o COMUPE — Consórcio dos Municípios Pernambucanos, uma entidade pública de Pernambuco que gerencia compras coletivas e serviços compartilhados entre municípios consorciados.
Tecnologia: React + Tailwind CSS. Fonte: Inter (Google Fonts, pesos 300, 400, 500, 600, 700). Página única com navegação por âncoras e scroll suave. Totalmente responsivo.

CORES E IDENTIDADE VISUAL

Azul primário: #0F4C9A
Azul escuro / navy: #0d1b2e
Preto quase total (rodapé): #07111f
Fundo claro: #f8f9fb
Fundo branco: #ffffff
Texto principal: #0d1b2e
Texto secundário: #6b7280
Texto suave: #9ca3af
Borda de cards: #eaecf0
Verde destaque: #34d399
Fonte: Inter em todo o site, sem exceção
Border-radius: 12px nos cards, 8px nos botões e inputs
Sem gradientes em nenhum elemento
Sem sombras pesadas — usar bordas finas de 1px para elevação dos cards


SEÇÃO 1 — HEADER FIXO
Fundo branco com borda inferior 1px solid #eaecf0. À esquerda: ícone hexagonal SVG preenchido com #0F4C9A + texto "COMUPE" em negrito 15px #0F4C9A + subtítulo "Consórcio dos Municípios Pernambucanos" em 9px #9ca3af. À direita: links de navegação em 11px peso 500 cor #6b7280 — Consorciados · Institucional · Licitações · Agenda · Ouvidoria — e um botão sólido "Contato" com fundo #0F4C9A, texto branco, padding 7px 16px, border-radius 7px. Link ativo fica em #0F4C9A peso 600. No mobile: menu hambúrguer.

SEÇÃO 2 — HERO
Fundo sólido #0F4C9A. No topo esquerdo: um pequeno badge/pílula com fundo rgba(255,255,255,0.12), borda 1px solid rgba(255,255,255,0.2), texto "Entidade Pública · Pernambuco" com um ponto verde #34d399 à esquerda. Título H1 em 30px peso 700 branco letter-spacing -0.5px line-height 1.25: "Gestão pública municipal mais eficiente" — a palavra "eficiente" deve estar em #93c5fd (azul claro). Parágrafo em 13px peso 400 rgba(255,255,255,0.75) line-height 1.7 max-width 360px: "O COMUPE une municípios pernambucanos para compras coletivas, licitações compartilhadas e serviços de excelência." Dois botões lado a lado: botão primário com fundo branco, texto #0F4C9A, peso 700, "Conheça o COMUPE"; botão secundário com fundo rgba(255,255,255,0.1), texto branco, borda 1.5px solid rgba(255,255,255,0.3), "Ver licitações →". Abaixo dos botões: linha divisória border-top 1px solid rgba(255,255,255,0.12) e depois 3 estatísticas em linha: "+30 / Municípios consorciados", "+200 / Licitações realizadas", "2011 / Ano de fundação". Números em 22px bold branco, rótulos em 10px rgba(255,255,255,0.6). Dois círculos decorativos posicionados no canto superior direito com opacity muito baixa (0.03 e 0.04) em branco, sem borda — apenas para dar profundidade sutil.

SEÇÃO 3 — LICITAÇÕES RECENTES
Fundo branco. Padding 52px vertical 44px horizontal. Badge de seção: "TRANSPARÊNCIA" em 10px peso 600 uppercase letter-spacing 0.4px cor #0F4C9A fundo #e8f0fc border-radius 20px. Título: "Licitações recentes" em 22px peso 700 #0d1b2e letter-spacing -0.4px. Subtítulo: "Processos licitatórios abertos disponíveis para os municípios consorciados." em 12px #6b7280. Grid de 3 colunas gap 16px com os seguintes cards — cada card tem: fundo branco, borda 1px solid #eaecf0, border-radius 12px, padding 22px 20px, flex coluna.
Dentro de cada card: tag de categoria em pílula 10px peso 600 border-radius 6px (Veículos: fundo #fef3c7 texto #92400e / Informática: fundo #dbeafe texto #1e40af / Medicamentos: fundo #dcfce7 texto #166534), número do processo em 10px #9ca3af peso 500, título do edital em 12.5px peso 600 #1a2744 line-height 1.55, link "Ver edital →" em 11px peso 600 #0F4C9A sem sublinhado.
Dados dos cards:

Card 1: tag Veículos · "P.L. Nº 07/2026 — P.E. Nº 05/2026" · "Novo edital de aquisição de veículos para municípios"
Card 2: tag Informática · "P.L. Nº 06/2026 — P.E. Nº 04/2026" · "Edital de equipamentos de informática e tecnologia"
Card 3: tag Medicamentos · "P.L. Nº 05/2026 — P.E. Nº 03/2026" · "Edital de medicamentos e material médico-hospitalar"

Abaixo do grid: botão centralizado "Ver todas as licitações →" com fundo branco, borda 1.5px solid #0F4C9A, cor #0F4C9A, padding 11px 26px, border-radius 8px, 12px peso 600.

SEÇÃO 4 — NOTÍCIAS
Fundo #f8f9fb. Mesma estrutura de badge/título/subtítulo. Badge: "NOVIDADES". Título: "Notícias". Subtítulo: "Fique por dentro das últimas novidades e ações do COMUPE." Grid de 3 colunas. Cada card: fundo branco, borda 1px solid #eaecf0, border-radius 12px, overflow hidden. Área de imagem: 86px de altura, fundo colorido sólido (sem fotos reais), centralizado. Corpo do card com padding 16px 18px: data em 10px #9ca3af peso 500, título em 12.5px peso 600 #1a2744 line-height 1.55, link "Leia mais →" em 11px peso 600 #0F4C9A.
Dados dos cards:

Card 1: fundo da imagem #dbeafe · Data: Nov 2023 · Título: "Comupe promove curso para técnicos na nova lei de licitações"
Card 2: fundo da imagem #dcfce7 · Data: Out 2023 · Título: "Destinação de 2.160 exames de mamografia a municípios consorciados"
Card 3: fundo da imagem #fef3c7 · Data: Dez 2025 · Título: "Contratação de serviços de gestão de mídias sociais e produção audiovisual"

Botão centralizado abaixo: "Ver todas as notícias →" mesmo estilo outline azul.

SEÇÃO 5 — ACESSO RÁPIDO
Fundo escuro #0d1b2e. Badge: "PORTAIS" com fundo rgba(255,255,255,0.1) cor rgba(255,255,255,0.8). Título: "Acesso rápido" em branco. Subtítulo: "Links diretos para os principais portais e sistemas institucionais." em rgba(255,255,255,0.5). Grid de 3 colunas com 6 cards. Cada card: fundo rgba(255,255,255,0.06), borda 1px solid rgba(255,255,255,0.1), border-radius 12px, padding 20px 18px, flex linha alinhado ao centro, gap 14px. Caixa do ícone: 36x36px fundo rgba(15,76,154,0.5) border-radius 8px com ícone Lucide centralizado. Rótulo: 12px branco peso 600. Sub-rótulo: 10px rgba(255,255,255,0.45).
Dados dos 6 cards:

Ícone Search · "Portal da Transparência" · "Dados públicos"
Ícone FileText · "e-SIC" · "Sistema de Informação ao Cidadão"
Ícone Megaphone · "e-Ouvidoria" · "Registre sua manifestação"
Ícone Scale · "TCE-PE" · "Tribunal de Contas"
Ícone File · "Portal de Licitações" · "Editais e processos"
Ícone Heart · "Contratações COVID-19" · "Lei Federal 13.979/2020"


SEÇÃO 6 — MUNICÍPIOS CONSORCIADOS
Fundo #f8f9fb. Badge: "REDE". Título: "Municípios consorciados". Subtítulo: "Encontre informações sobre os municípios que fazem parte do COMUPE." Campo de busca: largura total, fundo branco, borda 1.5px solid #e5e7eb, border-radius 9px, padding 10px 16px, 12px, placeholder "Buscar município...". Grid de 3 colunas com cards de município. Cada card: fundo branco, borda 1px solid #eaecf0, border-radius 10px, padding 14px 16px, flex linha alinhado ao centro, gap 10px. Círculo de iniciais: 34x34px fundo #e8f0fc border-radius 8px texto 11px bold #0F4C9A. Nome: 12px peso 600 #1a2744. Região: 10px #9ca3af.
Dados dos 6 municípios:

AF · Afogados da Ingazeira · Sertão do Pajeú
AR · Arcoverde · Sertão Central
CA · Caruaru · Agreste Central
OL · Olinda · Região Metropolitana
IG · Igarassu · Mata Norte
ST · Serra Talhada · Sertão do Pajeú

Botão centralizado: "Ver todos os municípios →" estilo outline azul.

SEÇÃO 7 — CONTATO
Fundo branco. Badge: "FALE CONOSCO". Título: "Contato". Subtítulo: "Envie sua mensagem e retornaremos em breve." Layout de 2 colunas gap 36px.
Coluna esquerda — formulário: campos Nome completo, E-mail, Mensagem (textarea). Estilo dos inputs: fundo branco, borda 1.5px solid #e5e7eb, border-radius 8px, padding 9px 13px, 12px. Label acima de cada campo: 11px peso 600 #374151 letter-spacing 0.1px. Botão de envio: largura total, fundo #0F4C9A, texto branco, peso 700, 12px, border-radius 8px, "Enviar mensagem".
Coluna direita — informações de contato. Cada linha: caixa de ícone 36x36px fundo #e8f0fc border-radius 8px + rótulo em 10px uppercase #9ca3af + valor em 12px peso 500 #1a2744 line-height 1.6:

Ícone mapa · ENDEREÇO · "Av. Recife, 6205 — Jardim São Paulo / Recife-PE · CEP 50910-380"
Ícone telefone · TELEFONE · "(81) 3455-5131"
Ícone e-mail · E-MAIL · "comupe@comupe.org"
Ícone relógio · ATENDIMENTO · "Segunda a sexta / 08h às 17h"


SEÇÃO 8 — RODAPÉ
Fundo #07111f. Grid de 4 colunas. Coluna 1: logo "⬡ COMUPE" branco 14px bold + CNPJ e endereço em 10px rgba(255,255,255,0.35) line-height 1.7: "Consórcio dos Municípios Pernambucanos / CNPJ: 22.824.173/0001-67 / Av. Recife, 6205 — Recife-PE". Colunas 2, 3 e 4: cabeçalho em 10px peso 700 rgba(255,255,255,0.5) uppercase letter-spacing 0.6px + links em 11px rgba(255,255,255,0.45) sem sublinhado margin-bottom 7px.

Coluna 2 — NAVEGAÇÃO: Consorciados · Institucional · Licitações · Agenda
Coluna 3 — PORTAIS: Portal da Transparência · e-SIC · e-Ouvidoria · TCE-PE
Coluna 4 — CONTATO: comupe@comupe.org · (81) 3455-5131 · Fale conosco

Barra inferior: borda superior 1px solid rgba(255,255,255,0.07), flex espaço entre os dois lados: "© 2026 COMUPE — Todos os direitos reservados" à esquerda e "Desenvolvido com ♥ em Pernambuco" à direita. Ambos em 10px rgba(255,255,255,0.3).

REGRAS GLOBAIS OBRIGATÓRIAS

Sem gradientes em nenhum elemento do site
Sem sombras pesadas — apenas bordas para elevação
Todas as seções alternam os fundos nesta ordem: branco → #f8f9fb → #0d1b2e → #f8f9fb → branco → rodapé #07111f
Scroll suave em todos os links de âncora
No mobile: todos os grids colapsam para 1 coluna, estatísticas do hero empilham verticalmente, rodapé vai para 2 colunas depois 1
Todo o conteúdo é estático e limpo, sem erros ou avisos visíveis
Espaçamento padrão das seções: 52px vertical, 44px horizontal

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/382ca4cb-b1ad-418a-b280-3c0c326635e1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
