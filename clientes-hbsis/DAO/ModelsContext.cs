using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace clientes_hbsis.Models
{
    public class ModelsContext : DbContext
    {
        public DbSet<Cliente> Clientes { get; set; }


    }
}