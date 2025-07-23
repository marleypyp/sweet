const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002; // Importante: Use uma porta diferente (ex: 3002) para não conflitar com o ínk (que usa 3000 ou 3001)

// Middleware para servir arquivos estáticos (HTML, CSS, JS do frontend, imagens, etc.)
// Isso fará com que o Express sirva todos os arquivos da pasta atual onde o sweet.js está
app.use(express.static(path.join(__dirname)));

// Rota padrão: Quando alguém acessar a raiz do servidor (http://localhost:3002/),
// ele enviará o arquivo docinho.html como resposta.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docinho.html'));
});

// Exemplo de uma rota de API futura (se você quiser adicionar mais tarde)
// app.get('/api/fotos', (req, res) => {
//     // Aqui você poderia, por exemplo, ler do seu banco de dados
//     // e retornar uma lista de URLs de fotos, em vez de tê-las fixas no docinho.js
//     res.json({
//         message: 'Lista de fotos da API',
//         photos: [
//             'images/foto_amiga_1.jpg',
//             'images/foto_amiga_2.jpg'
//         ]
//     });
// });


// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor "Meu Céu Estrelado" (sweet.js) rodando em http://localhost:${PORT}`);
});