function criptografar(frase) {
    frase = frase.toLowerCase();
    frase = frase.replaceAll(/[^a-z\s]/g, ''); 
    frase = frase.replaceAll(/e/g, 'enter');
    frase = frase.replaceAll(/i/g, 'imes');
    frase = frase.replaceAll(/a/g, 'ai');
    frase = frase.replaceAll(/o/g, 'ober');
    frase = frase.replaceAll(/u/g, 'ufat');
    return frase;
}

function descriptografar(frase) {
    frase = frase.toLowerCase();
    frase = frase.replaceAll(/[^a-z\s]/g, ''); 
    frase = frase.replaceAll(/enter/g, 'e');
    frase = frase.replaceAll(/imes/g, 'i');
    frase = frase.replaceAll(/ai/g, 'a');
    frase = frase.replaceAll(/ober/g, 'o');
    frase = frase.replaceAll(/ufat/g, 'u');
    return frase;
}

function exibirCriptografada() {
    const inputFrase = document.getElementById('texto').value;
    const fraseDecodificada = criptografar(inputFrase);
    document.getElementById('fraseDecodificada').textContent = fraseDecodificada;
    document.getElementById('fraseDecodificada').style.display = 'block';
    document.getElementById('btnCopia').style.display = 'block'; 
    document.getElementById('img').style.display = 'none'; 
    document.getElementById('titulo').style.display = 'none'; 
    document.getElementById('subtitulo').style.display = 'none'; 
}

function exibirDescriptografada() {
    const inputFrase = document.getElementById('texto').value;
    const fraseDecodificada = descriptografar(inputFrase);
    document.getElementById('fraseDecodificada').textContent = fraseDecodificada;
    document.getElementById('fraseDecodificada').style.display = 'block';
    document.getElementById('btnCopia').style.display = 'block';
    document.getElementById('img').style.display = 'none'; 
    document.getElementById('titulo').style.display = 'none'; 
    document.getElementById('subtitulo').style.display = 'none'; 
}

function copiarTexto() {
    const textoParaCopiar = document.getElementById('fraseDecodificada').textContent;
    const textAreaTemporaria = document.createElement('textarea');
    textAreaTemporaria.value = textoParaCopiar;
    document.body.appendChild(textAreaTemporaria);
    textAreaTemporaria.select();
    try {
        const copiadoComSucesso = document.execCommand('copy');
        const mensagem = copiadoComSucesso ? 'copiado com sucesso' : 'não foi possível copiar';
        console.log(`Texto ${mensagem} para a área de transferência.`);
    } catch (erro) {
        console.error('Erro ao copiar o texto.');
    }
    document.body.removeChild(textAreaTemporaria);
    inputFrase = document.getElementById('texto').value = '';
}
