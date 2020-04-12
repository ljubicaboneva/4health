package mk.ukim.finki.wp.demo.web.controller;

import mk.ukim.finki.wp.demo.model.Diet;
import mk.ukim.finki.wp.demo.service.DietService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/diets")
public class DietController {

    @Autowired
    private final DietService dietService;

    public DietController(DietService dietService) {
        this.dietService = dietService;
    }

    @GetMapping
    public List<Diet> getDiets(){
        return dietService.getDiets();
    }

    @GetMapping("/{id}")
    public Diet getDiet(@PathVariable String id){
        return dietService.getDiet(id);

    }

    @PostMapping
    public Diet createFood(@RequestParam("name") String dietName,
                           @RequestParam("desc") String dietDesc)

    {
        Diet diet = new Diet(dietName,dietDesc);
        return dietService.createDiet(diet);

    }

    @PatchMapping("/{id}")
    public Diet editDiet(@PathVariable String id,
                         @RequestParam("name") String dietName,
                         @RequestParam("desc") String dietDesc)
    {
        Diet diet = new Diet(dietName,dietDesc);
        return dietService.editDiet(diet,id);
    }


    @DeleteMapping("/{id}")
    public void deleteDiet(@PathVariable String id){
        dietService.deleteByName(id);
    }

    @PutMapping("/{diet}/{id}")
    public void addDiet(@PathVariable String id,
                        @PathVariable String diet){
        dietService.addDietToPerson(id, diet);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDietPerson(@PathVariable String id){
        dietService.deleteDietPerson(id);
    }


}
