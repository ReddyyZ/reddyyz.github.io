---
layout: post
title:  "Quebrando Senhas de Arquivos ZIP"
date:   2020-09-09 19:08:00 -0300
categories: hacking
author: "ReddyyZ"
lang: pt-BR
tags: [linux, john the ripper, password cracking, cracking]
reading_time: 2 minutes
description: >-
    Arquivos zips podem conter senhas, que com uma boa wordlist e o kit certo de ferramentas você pode quebrá-las e conseguir acesso aos arquivos protegidos!<br>
    Neste artigo vamos aprender como crackear um arquivo zip!
image: https://reddyyz.github.io/assets/images/quebrando_zip.png
---

Arquivos zips podem conter senhas, que com uma boa wordlist e o kit certo de ferramentas você pode quebrá-las e conseguir acesso aos arquivos protegidos!<br>
Neste artigo vamos aprender como crackear um arquivo zip!

### Instalando as ferramentas necessárias

Para este ataque precisaremos da ferramenta [John the Ripper](https://github.com/openwall/john) e a famosa wordlist [rockyou.txt](https://drive.google.com/file/d/1XYngtQHwrYTT3fi1ojeQxT5H8w26y4Sb/view) com 14 milhões de senhas!

- John the Ripper - Ferramenta para hash cracking
- rockyou.txt - Wordlist com 14 milhões de senhas!

Vamos a instalação!

Caso esteja no debian ou no ubuntu, use o seguinte comando:
```sh
root@fsociety~# apt-get install john
```
<button class="copy" onClick="copy_to_clip2('apt-get install john')">Copiar comando</button>

Com tudo instalado, já podemos começar!

### Transformando o arquivo em um hash quebrável

Eu tenho um arquivo chamado `secreto.zip`, antes de quebra-lo precisamos transformá-lo em um hash que o john possa quebrar, usando uma ferramenta que vem junto ao john chamada `zip2john`.

Vamos lá! Vamos executar o seguinte comando para transformá-lo em hash:
```sh
root@fsociety~# zip2john secreto.zip > hash.txt
```
<button class="copy" onClick="copy_to_clip2('zip2john secreto.zip > hash.txt')">Copiar comando</button>

E agora o hash do arquivo está salvo em `hash.txt`, agora já podemos quebrá-lo!

### Quebrando o hash

Agora que temos tudo que precisamos, vamos quebrar o hash usando o seguinte comando:
```sh
root@fsociety~# john hash.txt --wordlist=rockyou.txt
```
<button class="copy" onClick="copy_to_clip2('john hash.txt --wordlist=rockyou.txt')">Copiar comando</button>

E então vamos aguardar algum tempo (que pode variar entre segundos e horas dependendo da senha e do seu computador) e caso a senha esteja na wordlist, iremos encontrar a senha do arquivo zip!

![Quebrando ZIP](/assets/images/quebrando_zip.png)

### Obrigado!

Obrigado por ler até aqui! Caso tenha alguma dúvida entre no meu servidor do discord e pergunte!<br>
[Discord Server](https://discord.gg/v5d3PZ9)
<br>