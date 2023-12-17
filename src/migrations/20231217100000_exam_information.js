// @ts-check
/** @typedef {import("knex")} Knex */

/** @param {Knex} knex */
const up = async knex => {
  await knex.schema.alterTable('exams', tb => {
    tb.timestamp('date')
    tb.text('type').notNullable().defaultTo('exam').comment('"exam", "notes", "exercise" or "other"')
    tb.text('exam_type').comment('"KK", "EK", "VK", "UK", "MK1", "MK2", "MK3", "MK4" or "OTHER"')
    tb.text('name')
  })
}

/** @param {Knex} knex */
const down = async knex => {
  await knex.schema.alterTable('exams', tb => {
    tb.dropColumn('date')
    tb.dropColumn('type')
    tb.dropColumn('exam_type')
    tb.dropColumn('name')
  })

}

exports.up = up
exports.down = down
