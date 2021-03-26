package user;

public class UserReposistory implements IUserRepository {
    private IRepository<IUser> _repository;

    public UserReposistory(IRepository<IUser> repository) {
        this._repository = repository;
    }

    @Override
    public void add(IUser user) {
        this._repository.add(user);
    }

    @Override
    public void list() {
        this._repository.list().forEach(user -> System.out.println(user.getName()));
    }
}