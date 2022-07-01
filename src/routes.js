const { handler } = require('@hapi/hapi/lib/cors');
const {
  addNoteHandler, getAllNotesHandler, getNotesByIdHandler, editNotesHandler, deleteNotesHandler

} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    // options: {
    //   cors: {
    //     origin: ['*'],
    //   },
    // },

  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
    // options: {
    //   cors: {
    //     origin: ['*'],
    //   },
    // },
  },

  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesByIdHandler,
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotesHandler,
  },

  {
    method:'DELETE',
    path:'/notes/{id}',
    handler: deleteNotesHandler
  }

];

module.exports = routes;
