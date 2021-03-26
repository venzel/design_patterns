package iteratorcostumers;

public class Facade implements IFacade {
    public void execute() {
        ICostumerRepository costumerRepository = new CostumerRepository();

        costumerRepository.add(new Costumer("Tiago", 10));
        costumerRepository.add(new Costumer("Marco", 12));
        costumerRepository.add(new Costumer("Rita", 13));

        IIterator costumerIterator = new CostumerIterator(costumerRepository);

        while (costumerIterator.hasNext()) {
            ICostumer costumer = (ICostumer) costumerIterator.next();

            System.out.println(costumer.getName());
        }
    }
}