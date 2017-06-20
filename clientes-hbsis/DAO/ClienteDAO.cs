using clientes_hbsis.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace clientes_hbsis.DAO
{
    public class ClienteDAO
    {
        public IList<Cliente> Lista()
        {
            using (var context = new ModelsContext())
            {
                return context.Clientes.Select(c => c).ToList();
            }
        }

        public Cliente BuscarPorID(int id)
        {
            using (var context = new ModelsContext())
            {
                return context.Clientes.FirstOrDefault(s => s.ID == id);
            }
        }

        public void Adiciona(Cliente cliente)
        {
            using (var context = new ModelsContext())
            {
                context.Clientes.Add(cliente);
                context.SaveChanges();
            }
        }

        public void Atualiza(Cliente cliente)
        {
            using (var context = new ModelsContext())
            {
                Cliente clienteDB = context.Clientes.FirstOrDefault(s => s.ID == cliente.ID);

                if (clienteDB != null)
                {
                    clienteDB.Nome = cliente.Nome;
                    clienteDB.Telefone = cliente.Telefone;
                    clienteDB.Codigo = cliente.Codigo;
                    clienteDB.CPF = cliente.CPF;

                    context.SaveChanges();
                }
            }
        }

        public void RemovePorId(int id)
        {
            using (var context = new ModelsContext())
            {
                Cliente clienteDB = context.Clientes.FirstOrDefault(s => s.ID == id);

                if (clienteDB != null)
                {
                    context.Clientes.Remove(clienteDB);
                    context.SaveChanges();
                }
            }
        }
    }
}