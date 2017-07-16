'use strict'

const SqlStore = require('../sql-store')

it('saves options', () => {
  const store = new SqlStore({ client: 'pg', connection: '' }, 'app_')
  expect(store.config).toEqual({ client: 'pg', connection: '' })
  expect(store.prefix).toEqual('app_')
})
