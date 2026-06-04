/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  return knex("livros").del()
  .then(function () {
    return knex("livros").insert([
      {
        titulo: "web Design Responsivo", autor: "Mauricio Samy Silva", ano: 2014,
        preco: 73.0, foto: "http://s3.novatec.com.br/capas/9788575223925.png",
      }, 
      {
        titulo: "Proteção Moderna de Dados", autor: "W, Curtis Preston", ano: 2021,
        preco: 97.0, foto: "http://s3.novatec.com.br/capas/9786586057843.png",
      }, 
      {
        titulo: "SQL em 10 Minutos por Dia", autor: "Ben Forta", ano: 2021,
        preco: 79.0, foto: "http://s3.novatec.com.br/capas/9786586057447.png",
      },
      {
        titulo: "CSS Grid Layout", autor: "Mauricio Samy Silva", ano: 2017,
        preco: 45.0, foto: "http://s3.novatec.com.br/capas/9788575226322.png",
      },
      {
        titulo: "Python para análise de dados", autor: "Wes McKinney", ano: 2018,
        preco: 132.0, foto: "http://s3.novatec.com.br/capas/9788575226476.png",
      },
    ])
  })
  
};
