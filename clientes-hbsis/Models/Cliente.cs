using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace clientes_hbsis.Models
{
    public class Cliente
    {
        public int ID { get; set; } 
        public int Codigo { get; set; }
        public string Nome { get; set; }
        public string CPF { get; set; }
        public string Telefone { get; set; }

    }
}