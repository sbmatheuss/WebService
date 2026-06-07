/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  return knex("livros").del()
  .then(function () {
    return knex("livros").insert([
      {
        titulo: "Web Design Responsivo", autor: "Mauricio Samy Silva", ano: 2014,
        preco: 73.0, foto: "http://localhost:3001/capas/1.jpg",
      }, 
      {
        titulo: "Proteção Moderna de Dados", autor: "W. Curtis Preston", ano: 2021,
        preco: 97.0, foto: "http://localhost:3001/capas/2.jpg",
      }, 
      {
        titulo: "SQL em 10 Minutos por Dia", autor: "Ben Forta", ano: 2021,
        preco: 79.0, foto: "http://localhost:3001/capas/3.jpg",
      },
      {
        titulo: "CSS Grid Layout", autor: "Mauricio Samy Silva", ano: 2017,
        preco: 45.0, foto: "http://localhost:3001/capas/4.jpg",
      },
      {
        titulo: "Python para análise de dados", autor: "Wes McKinney", ano: 2018,
        preco: 132.0, foto: "http://localhost:3001/capas/5.jpg",
      },
      {
        titulo: "Estratégia de UX", autor: "Jaime Levy", ano: 2021,
        preco: 95.0, foto: "http://localhost:3001/capas/6.jpg",
      },
      {
        titulo: "Refatoração", autor: "Martin Fowler", ano: 2017,
        preco: 129.0, foto: "http://localhost:3001/capas/7.jpg",
      },
    ])
  })
  
};
