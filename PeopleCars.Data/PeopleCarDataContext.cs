﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeopleCars.Data
{
    public class PeopleCarDataContext :DbContext
    {
        private readonly string _connectionString;

        public PeopleCarDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }
        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
        public DbSet<Person> People { get; set; }
        public DbSet<Car> Cars { get; set; }
    }
}
