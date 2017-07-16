'use strict'

class SqlStore {
  /**
   * Store Logux log in SQL databases.
   *
   * @param {object} config Knex config for database connection.
   * @param {string} [prefix="logux_"] Name prefix for log tables.
   *
   * @example
   * const SqlStore = require('logux/sql-store')
   * consnt log = new Log({
   *   store: new SqlStore({
   *     client: 'pg',
   *     connection: process.env.PG_CONNECTION_STRING
   *   }),
   *   nodeId
   * })
   */
  constructor (config, prefix) {
    this.config = config
    this.prefix = prefix || 'logux_'
  }
}

module.exports = SqlStore
