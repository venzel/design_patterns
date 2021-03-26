package chainofresponsability.entities;

public interface IPlanet {
    String getName();

    void setName(String name);

    int getBronze();

    void setBronze(int bronze);

    int getSilver();

    void setSilver(int silver);

    int getGold();

    void setGold(int bronze);
}