
exports.up = function(knex, Promise) {
    return knex.schema.createTable('members', function(tbl){
        tbl.increments();
        tbl.string('members').notNullable();
        tbl.string('wishlist');
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('members');
};
