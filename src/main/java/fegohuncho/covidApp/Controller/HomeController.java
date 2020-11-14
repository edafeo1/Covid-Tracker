package fegohuncho.covidApp.Controller;


import fegohuncho.covidApp.service.CovidDataService;
import fegohuncho.covidApp.service.Modules.LocationStats;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class HomeController {

    @Autowired
    CovidDataService covidDataService;

    @GetMapping("/")
    public String home(Model model){
        List<LocationStats> allStats = covidDataService.getTotalStats();

        int totalReportedCases = allStats.stream().mapToInt(stat -> stat.getLatestTotalCases()).sum();
        int totalNewCases = allStats.stream().mapToInt(stat -> stat.getDiffFromPrevDay()).sum();
        model.addAttribute("locationStats", allStats);
        model.addAttribute("totalReportedCases", totalReportedCases);
          model.addAttribute("totalNewCases", totalNewCases);

        return "home";
    }

    @GetMapping("/stats")
    @ResponseBody
    public List<LocationStats> getStats() {
        return covidDataService.getTotalStats();
    }
}
