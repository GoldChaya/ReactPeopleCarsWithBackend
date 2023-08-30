using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PeopleCars.Data;

namespace PeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private readonly string _connectionString;
        public PeopleCarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("Constr");
        }
        [HttpGet]
        [Route("getall")]
        public List<Person> Home()
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetPeople();
        }
        [HttpPost]
        [Route("addperson")]
        public void AddPerson(Person person)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddPerson(person);
        }
        [HttpGet]
        [Route("GetPerson")]
        public Person GetPerson(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetById(id);
        }
        [HttpPost]
        [Route("addcar")]
        public void AddCar(Car car)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddCar(car);
        }
        [HttpGet]
        [Route("GetCars")]
        public void GetCars (int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.GetCarsForPerson(id);
        }
        [HttpPost]
        [Route("deletecars")]
        public void DeleteCars(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.DeleteCars(id);
        }
    }
}
