
exports.seed = function(knex) {
  return knex('dogs')
    .truncate()
    .then(function () {
      return knex('dogs').insert([
        {name: 'Kali'},
        {name: 'Afie'},
        {name: 'Izzy'}
      ]);
    });
};
