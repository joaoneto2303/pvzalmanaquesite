const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));

let plantas = [
    { 
        nome: "Peashooter", 
        tipo: "Ataque", 
        custoemsol: 100, 
        recarregamento: "Rápido", 
        dano: "Normal",
        descricao: "Dispara uma ervilha comum contra os zumbis que se aproximam." 
    },
    { 
        nome: "Sunflower", 
        tipo: "Produção", 
        custoemsol: 50, 
        recarregamento: "Rápido", 
        dano: "Nenhum",
        descricao: "Essencial para produzir sol extra e plantar mais defesas rapidamente." 
    }
];

app.get('/', (req, res) => {
    res.render('listar', { plantas });
});

app.get('/novo', (req, res) => {
    res.render('cadastrar');
});

app.post('/salvar', (req, res) => {
    plantas.push(req.body);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("Almanaque PvZ rodando com sucesso em http://localhost:3000");
});