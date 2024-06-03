// @ts-check
/** @typedef {import("knex")} Knex */

/** @param {Knex} knex */
const up = async knex => {
  await knex.schema.alterTable('exams', tb => {
    tb.timestamp('date')
    tb.text('type')
      .notNullable()
      .defaultTo('exam')
      .comment('"exam", "notes", "exercise" or "other"')
  })
}

/** @param {Knex} knex */
const down = async knex => {
  await knex.schema.alterTable('exams', tb => {
    tb.dropColumn('date')
    tb.dropColumn('type')
  })
}

exports.up = up
exports.down = down
