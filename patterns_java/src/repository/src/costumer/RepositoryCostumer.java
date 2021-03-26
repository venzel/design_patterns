package costumer;

public class RepositoryCostumer implements IRepositoryCostumer {
    private IRepository<ICostumer> _repository;

    public RepositoryCostumer(IRepository<ICostumer> repository) {
        this._repository = repository;
    }

    public void add(ICostumer costumer) {
        this._repository.add(costumer);
    }

    public void list() {
        this._repository.list().forEach(costumer -> System.out.println(costumer.getName()));
    }
}