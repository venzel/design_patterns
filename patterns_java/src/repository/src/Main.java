import car.IRepositoryCar;
import car.RepositoryCar;
import car.Repository;
import car.ICar;
import car.Car;

public class Main {
    public static void main(String[] args) {

        IRepositoryCar repositoryCar = new RepositoryCar(new Repository<ICar>());

        repositoryCar.add(new Car("Cruze"));
        repositoryCar.add(new Car("Blazer"));
        repositoryCar.add(new Car("Onix"));

        repositoryCar.list();
    }
}