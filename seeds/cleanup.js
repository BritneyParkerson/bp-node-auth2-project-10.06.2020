

const cleaner = require("knex-cleaner");

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: "truncate",
    restartIdentity: true,
    ignoreTables: ["knex_migrations", "knex_migrations_lock"],
  })
  .then(() => console.log("\n** Truncate complete. Proceed to seed. ** \n"));
};