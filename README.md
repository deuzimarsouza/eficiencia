# Dashboard de Eficiência

Aplicação estática em HTML, CSS e JavaScript para apoio a cálculos de produção, eficiência, preparação e absenteísmo.

## Estrutura

- `index.html`: tela inicial, abas de navegação e splash de carregamento.
- `pages/`: telas navegáveis da aplicação.
- `pages/potencial-turno1.html`: projeção de produção do 1º turno, com carga de 440 minutos por pessoa.
- `pages/potencial-turno2.html`: projeção de produção do 2º turno, com carga de 440 minutos por pessoa.
- `pages/potencial-turno3.html`: projeção de produção do 3º turno, com carga de 380 minutos por pessoa.
- `pages/potencial-rapido.html`: cálculo rápido de diferença entre projetado e realizado.
- `pages/preparacao.html`: relatório de produção das linhas de preparação.
- `pages/calculadora-de-eficiencia.html`: calculadora individual de eficiência por modelo, pares e mão de obra.
- `pages/absenteismo.html`: controle de faltas, atestados, advertências e gráficos.
- `pages/modelos.html`: consulta dos modelos e tempos usados nos cálculos.
- `pages/original potencial v1.html`: versão legada mantida como referência histórica.
- `src/data/modelos-db.js`: fonte única dos modelos e tempos usados nas calculadoras.
- `src/dev/`: imagem local do responsável/desenvolvedor.
- `src/fonts/`: fontes locais.
- `src/icons/`: ícones usados nos botões.
- `src/logo/`: imagens de marca/identidade.

## Como executar

Por ser um projeto estático, a maioria das páginas abre diretamente no navegador. Se preferir navegar por um servidor local, rode na raiz do projeto:

```powershell
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Instalação pelo navegador

O projeto está configurado como PWA. Ao abrir pelo Chrome usando um servidor local (`localhost`) ou HTTPS, o navegador pode mostrar a opção **Instalar app** na barra de endereço ou no menu do navegador.

Arquivos usados para instalação:

- `manifest.webmanifest`: nome, ícones, tema e modo de exibição do app.
- `sw.js`: service worker para habilitar instalação e cache básico.
- `src/app-pwa.js`: registro do service worker nas páginas.
- `src/icons/app-icon-192.png` e `src/icons/app-icon-512.png`: ícones usados pelo navegador.

## Dados locais

Algumas páginas salvam dados no `localStorage` do navegador:

- Projeção 1º turno: `eficiencia_linhas_turno1`
- Projeção 2º turno: `eficiencia_linhas_turno2`
- Projeção 3º turno: `eficiencia_linhas_turno3`
- Cálculo rápido: `relatorio_eficiencia`
- Absenteísmo: chaves iniciadas por `absenteismo_`
- Preparação: `preparacao_relatorio`

O 3º turno ainda migra dados antigos salvos em `eficiencia_linhas` para preservar registros já existentes.

## Manutenção

Para atualizar tempos ou adicionar modelos, edite somente `src/data/modelos-db.js`. As páginas de projeção, calculadora e consulta de modelos carregam essa base compartilhada.
