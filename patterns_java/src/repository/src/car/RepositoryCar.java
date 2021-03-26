package car;

public class RepositoryCar implements IRepositoryCar {
    private IRepository<ICar> _repository;

    public RepositoryCar(IRepository<ICar> repository) {
        this._repository = repository;
    }

    @Override
    public void add(ICar car) {
        this._repository.add(car);
    }

    @Override
    public void list() {
        this._repository.list().forEach(car -> System.out.println(car.getName()));
    }
}