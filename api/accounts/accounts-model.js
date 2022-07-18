const db = require('../../data/db-config')

const getAll = () => {
  //select * from accounts;
  return db('accounts');
}

const getById = id => {
  // select * from accounts where id = 1;
  return db('accounts').where('id', id).first()
}

const create = async account => {
return db('accounts').insert(account).then(arrayWithId => {
  return getById(arrayWithId[0]);
});
}

const updateById = async (id, account) => {
  await db('accounts').where('id', id).update(account)
  return getById(id)
}

const deleteById = id => {
  //delete from accounts where id = 1
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
