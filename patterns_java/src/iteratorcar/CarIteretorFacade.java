package iteratorcar;

public class CarIteretorFacade implements ICarITeratorFacade {
    @Override
    public void execute() {
        ICarRepository carRepository = new CarRepository();

        carRepository.add(new Car("Monza"));
        carRepository.add(new Car("Civic"));
        carRepository.add(new Car("Del rey"));

        IIterator carIteretor = new CarIterator(carRepository);

        while (carIteretor.hasNext()) {
            ICar car = (ICar) carIteretor.next();

            System.out.println(car.getName());
        }
    }

}
