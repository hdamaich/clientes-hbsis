using clientes_hbsis.DAO;
using clientes_hbsis.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Http.Routing;

namespace clientes_hbsis.Controllers
{
    public class ClienteController : ApiController
    {
        public HttpResponseMessage Get()
        {
            ClienteDAO dao = new ClienteDAO();

            var clientes = dao.Lista();
            
            HttpResponseMessage reponseMessage = Request.CreateResponse(HttpStatusCode.OK, clientes);

            return reponseMessage;
        }

        public HttpResponseMessage Get(int id)
        {
            ClienteDAO dao = new ClienteDAO();

            var cliente = dao.BuscarPorID(id);
            
            HttpResponseMessage reponseMessage = Request.CreateResponse(HttpStatusCode.OK, cliente);

            return reponseMessage;
        }


        public HttpResponseMessage Post([FromBody] Cliente cliente)
        {
            ClienteDAO clienteDao = new ClienteDAO();
            clienteDao.Adiciona(cliente);

            HttpResponseMessage responseMessage = Request.CreateResponse(HttpStatusCode.Created);

            return responseMessage;
        }
        public HttpResponseMessage Put([FromBody] Cliente cliente)
        {
            ClienteDAO clienteDao = new ClienteDAO();
            clienteDao.Atualiza(cliente);

            HttpResponseMessage responseMessage = Request.CreateResponse(HttpStatusCode.Accepted);

            return responseMessage;
        }

        public HttpResponseMessage Delete(int id)
        {
            ClienteDAO clienteDao = new ClienteDAO();
            clienteDao.RemovePorId(id);

            HttpResponseMessage responseMessage = Request.CreateResponse(HttpStatusCode.Accepted);

            return responseMessage;
        }

   }
}
