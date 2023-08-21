// const texto = document.getElementById("apresentacao-conteudo-titulo");

// function typeWriter(elemento){
//     const textoOriginal = elemento.innerHTML; // Guarda o texto original com as tags
//     elemento.innerHTML = ''; // Limpa o conteúdo atual do elemento
//     let index = 0; // Índice para percorrer o texto

//     function digitarTexto() {
//         if (index < textoOriginal.length) {
//             if (textoOriginal[index] === '<') {
//                 // Se encontrou uma tag, avança até o fechamento da tag
//                 const tagFechamento = textoOriginal.indexOf('>', index) + 1;
//                 elemento.innerHTML += textoOriginal.substring(index, tagFechamento);
//                 index = tagFechamento;
//             } else {
//                 // Caso contrário, adiciona um caractere por vez
//                 elemento.innerHTML += textoOriginal[index];
//                 index++;
//             }
//             setTimeout(digitarTexto, 75); // Chama a função novamente após um intervalo
//         }
//     }

//     digitarTexto();
// }

// typeWriter(texto);

// console.log(texto);
