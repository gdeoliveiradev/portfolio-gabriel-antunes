# Atualizar o portfólio, passo a passo

## 1. Abrir no Codex

Abra/adicione um projeto local e selecione `F:\TI\Projetos\portfolio-gabriel-antunes`. Use essa mesma pasta no VS Code e no GitHub Desktop. Não é necessário criar outro repositório ou clonar novamente.

Uma tarefa aberta no projeto OPERAÇÕES não fica automaticamente vinculada à pasta do portfólio. Nas próximas tarefas, escolha o projeto local do portfólio.

## 2. Trazer a versão mais recente

No GitHub Desktop, selecione `portfolio-gabriel-antunes`, confirme a branch `main` e clique em **Fetch origin**. Se aparecer **Pull origin**, clique para receber as atualizações. Resolva alterações locais pendentes antes de atualizar.

Alternativa no terminal, dentro da pasta do projeto:

```powershell
git status
git pull --ff-only origin main
```

Se houver conflito ou divergência, peça ao Codex para analisar. Não use comandos que descartem alterações.

## 3. Pedir uma melhoria pequena

Exemplo de pedido ao Codex:

> Melhore a apresentação da seção Portfólio para recrutadores. Preserve os fatos e o projeto Conexão Tech São Borja. Mantenha HTML, CSS e JavaScript puro. Teste a alteração e explique como visualizar o resultado.

## 4. Testar antes de publicar

Abra `index.html` no navegador; atualize a página depois das edições. Confira:

- As quatro seções e todos os itens do menu.
- Tema claro e escuro, leitura dos textos e botões.
- Janela larga e estreita, sem texto cortado ou rolagem horizontal indevida.
- Links profissionais e imagens.
- Links de e-mail e WhatsApp com destinatários corretos. Não é necessário enviar mensagens durante o teste.

No terminal, com Node.js instalado, verifique também a sintaxe:

```powershell
node --check script.js
git diff --check
git diff
```

Esses comandos não substituem o teste visual nem comprovam entrega de mensagens nos aplicativos externos. Se o site passar a usar recursos que exigem servidor, peça ao Codex uma prévia HTTP local.

## 5. Salvar uma versão: commit

No GitHub Desktop, revise a lista de arquivos e marque somente as alterações desejadas. Em **Summary**, escreva uma descrição, como `Melhora apresentação dos projetos`. Clique em **Commit to main**.

O commit salva uma versão no histórico do computador. Ainda não atualiza o site.

Alternativa no terminal, escolhendo apenas os arquivos realmente alterados:

```powershell
git add index.html estilo.css script.js
git commit -m "Melhora apresentação dos projetos"
```

## 6. Enviar: push

Clique em **Push origin** no GitHub Desktop. Ou execute:

```powershell
git push origin main
```

O push envia seus commits ao GitHub. Se for necessário autenticar, use a janela de login; nunca cole senhas ou tokens no chat. Se o envio for rejeitado, peça ao Codex para analisar antes de tentar novamente.

## 7. Conferir o GitHub Pages

Abra https://github.com/gdeoliveiradev/portfolio-gabriel-antunes/settings/pages

A configuração prevista para este projeto é **Deploy from a branch**, branch **main**, pasta **/(root)**. Confira a configuração existente antes de mudar. Se já estiver assim e funcionando, não precisa salvar novamente a cada edição.

Depois do push, acompanhe a publicação na aba **Actions** e abra https://gdeoliveiradev.github.io/portfolio-gabriel-antunes/ . Se ainda aparecer a versão antiga, aguarde a conclusão da publicação e atualize com Ctrl+F5. Se a publicação falhar, leia o erro em Actions.

O computador pode ser desligado: a hospedagem fica no GitHub. Manter o conteúdo atualizado depende de novas edições; não é necessário fazer commits vazios para manter o site ativo.

## Recuperar uma versão

Peça ao Codex para identificar o commit problemático e criar um `git revert`, que registra uma nova versão desfazendo a alteração. Revise, teste e publique o revert. Evite reescrever o histórico com force push.

## Próximas melhorias de carreira

1. Conferir periodicamente os contatos diretos, a foto e as informações profissionais. Confirmar o ano de conclusão do curso de banco de dados.
2. Escrever uma apresentação voltada à área de interesse, com fatos confirmados.
3. Acrescentar projetos reais com problema, contribuição, tecnologias, resultado e links disponíveis.
4. Publicar um currículo revisado, com somente os dados que devem ser públicos.
5. Revisar acessibilidade e experiência no celular.

A cada novo projeto, curso concluído ou mudança profissional, atualize o conteúdo. Uma revisão mensal dos links e contatos é uma rotina útil; nenhum agendamento automático foi criado.

## Referências

- Aplicativo e abertura de pastas: https://learn.chatgpt.com/docs/app
- Publicação do GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
