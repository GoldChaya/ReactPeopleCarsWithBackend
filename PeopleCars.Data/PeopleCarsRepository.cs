using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeopleCars.Data
{
    public class PeopleCarsRepository
    {
        private readonly string _connectionString;
        public PeopleCarsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Person> GetPeople()
        {
            using var context = new PeopleCarDataContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }
        public void AddPerson(Person person)
        {
            using var context = new PeopleCarDataContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }
        public List<Car> GetCarsForPerson(int personId)
        {
            using var context = new PeopleCarDataContext(_connectionString);
            return context.Cars.Where(c => c.PersonId == personId).ToList();
        }
        public void AddCar(Car car)
        {
            using var context = new PeopleCarDataContext(_connectionString);
            context.Cars.Add(car);
            context.SaveChanges();
        }
        public Person GetById(int id)
        {
            using var context = new PeopleCarDataContext(_connectionString);
            return context.People.FirstOrDefault(p => p.Id == id);
        }
        public void DeleteCars(int personId)
        {
            var context = new PeopleCarDataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM Cars WHERE PersonId = {personId}");
            context.SaveChanges();
        }
    }
}
