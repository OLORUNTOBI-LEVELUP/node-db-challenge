
exports.seed = function(knex) {
  return knex('actions').insert([
    {
      project_id: 1,
      description: 'WORK AND PLAY',
      notes:
        'BE HAPPY',
    },
    {
      project_id: 1,
      description: 'Take a nap',
      notes: 'You are beautiful',
    },
    {
      project_id: 1,
      description: 'sleep and eat',
      notes: 'This is where the magic happens!',
    },
  ]);
};