/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('meetings', (table) => {
      table.increments('id').primary();      
      table
        .integer('user_id')
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.date('date').notNullable();
      table.time('hour').notNullable();
      table.tinyint('receive_payment').notNullable();
      table.decimal('value');
      table.text('description_gem').notNullable();
      table.text('description_meeting').notNullable();
      table
        .integer('activity_id')
        .unsigned()
        .references('activities.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');      
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('meetings');
  };