import sequelize from "./config/dbTestSequelize.js";
import Fabricante from "./models/Fabricante.js";
import Produto from "./models/Produto.js";
import Categoria from "./models/Categoria.js";
import CategoriaProduto from "./models/CategoriaProduto.js";

(async () => {

    await sequelize.sync({force: true});

    const novoFabrincante = await Fabricante.create({
        nome: "Apple"
    })
    console.log(novoFabrincante);

    const novoProduto = await Produto.create({
        nome: "MacBook Pro",
        preco: 10999.99,
        descricao: "Notebook de alta performance",
        idFabricante: novoFabrincante.id,
    })
    const novoProduto2 = await Produto.create({
        nome: "MacBook Air",
        preco: 7999.99,
        descricao: "Notebook de alta performance",
        idFabricante: novoFabrincante.id,
    })
    console.log(novoProduto);
    
    // 1:1
    // Lazy Loading
    const produtoLazy = await Produto.findByPk(1);
    const fabricanteLazy = await produtoLazy.getFabricante();
    console.log("1:1 Lazy\n", fabricanteLazy.nome);

    // Eager Loading
    const produtoEager = await Produto.findByPk(1, {
        include: [Fabricante]
    });
    console.log("1:1 Eager\n", produtoEager.fabricante.nome);

    // 1:N
    const fabricante1ToN = await Fabricante.findByPk(1, {
        include: [Produto]
    }); 
    const produtos = await fabricante1ToN.getProdutos();
    console.log("1:N\n", fabricante1ToN.produtos);

    // N:M
    const novaCategoria = await Categoria.create({
        nome: "Eletrônicos"
    });

    const produto = await Produto.findByPk(1);
    await produto.setCategoria(novaCategoria);
    console.log("N:M\n", produto.categoria);
    

    const produtoNtoM = await Produto.findByPk(1, {
        include: [Categoria]
    });
    console.log("N:M\n", produtoNtoM.categoria);
    
})();