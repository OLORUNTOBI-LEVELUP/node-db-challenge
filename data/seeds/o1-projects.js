exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Mongo DB',
      description:
        'Non relational database',
       
        
    },
  ]);
};