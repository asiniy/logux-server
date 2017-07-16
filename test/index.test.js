'use strict'

const BaseServer = require('../base-server')
const SqlStore = require('../sql-store')
const Server = require('../server')
const index = require('../')

it('has BaseServer class', () => {
  expect(index.BaseServer).toBe(BaseServer)
})

it('has SqlStore class', () => {
  expect(index.SqlStore).toBe(SqlStore)
})

it('has Server class', () => {
  expect(index.Server).toBe(Server)
})
