#  Amigo Secreto
<hr>
Um projeto simples para organizar sorteios de **Amigo Secreto** pelo navegador.  
Você pode adicionar os nomes dos participantes, exibir a lista e realizar o sorteio de forma totalmente automática e aleatória.

##  Funcionalidades

<img width="1919" height="939" alt="Captura de tela 2025-08-31 215051" src="https://github.com/user-attachments/assets/f591b75c-1a4b-4ec0-a39b-21071f840301" />

- **Adicionar amigos**  
  Digite o nome de cada participante no campo de texto e clique em **Adicionar**.  
  O nome é inserido na lista exibida na tela.

<img width="1919" height="939" alt="image" src="https://github.com/user-attachments/assets/da166d92-f5e7-445e-9707-02ad3ae83834" />

- **Exibir lista de amigos**  
  Conforme os nomes são adicionados, eles aparecem em uma lista organizada logo abaixo do campo de entrada.

<pre>
function sortearAmigo() { 
    if (amigos.length === 0) { 
        alert('A lista está vazia. Adicione amigos antes de continuar.');
        return;
    } 
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
  
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado foi: ${amigoSorteado}</li>`; 
  } 
</pre>


- **Sortear amigo secreto**  
  Ao clicar em **Sortear amigo**, o sistema escolhe automaticamente um nome da lista usando `Math.random()` e exibe o resultado em destaque.

<img width="1217" height="577" alt="image" src="https://github.com/user-attachments/assets/cbfd7dcb-651a-4507-bd70-72c69515b453" />
<img width="1117" height="636" alt="image" src="https://github.com/user-attachments/assets/cccacfd3-945e-485d-852b-b0c35c5d7468" />

- **Validações**  
  - Não é possível adicionar nomes vazios.  
  - Caso tente sortear sem ter nomes na lista, o sistema exibirá um alerta.

## Como utilizar

1. Abra o arquivo `index.html` em qualquer navegador moderno.  
2. Digite o nome dos amigos no campo de entrada e clique em **Adicionar**.  
3. Quando todos os nomes estiverem cadastrados, clique em **Sortear amigo**.  
4. O resultado aparecerá logo abaixo da lista.


## Tecnologias utilizadas
- **HTML5** → Estrutura da página.  (Disponibilizado pela Alura para o desafio de lógica)
- **CSS3** → Estilização e responsividade.  (Disponibilizado pela Alura para o desafio de lógica)
- **JavaScript Vanilla** → JavaScript puro, responsável pela lógica de interação e pelo sorteio.  

## Possíveis melhorias futuras
- Permitir **remoção de nomes** da lista.  
- Impedir que o mesmo nome seja sorteado mais de uma vez.  
- Adicionar a opção de **reiniciar o sorteio**.  
- Gerar pares de amigo secreto (quem tira quem), em vez de apenas sortear um nome.

