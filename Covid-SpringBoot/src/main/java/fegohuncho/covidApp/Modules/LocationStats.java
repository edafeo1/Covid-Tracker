package fegohuncho.covidApp.service.Modules;

public class LocationStats {
    public String State;
    public String Country;
    public int LatestTotalCases;
    private int diffFromPrevDay;

    public String getState() {
        return State;
    }

    public void setState(String state) {
        State = state;
    }

    public String getCountry() {
        return Country;
    }

    public void setCountry(String country) {
        Country = country;
    }

    public int getLatestTotalCases() {
        return LatestTotalCases;
    }

    public void setLatestTotalCases(int latestTotalCases) {
        this.LatestTotalCases = latestTotalCases;
    }

    @Override
    public String toString() {
        return "LocationStats{" +
                "State='" + State + '\'' +
                ", Country='" + Country + '\'' +
                ", LatestTotalCases=" + LatestTotalCases +
                '}';
    }
    public int getDiffFromPrevDay() {
        return diffFromPrevDay;
    }

    public void setDiffFromPrevDay(int diffFromPrevDay) {
        this.diffFromPrevDay = diffFromPrevDay;
    }
}
