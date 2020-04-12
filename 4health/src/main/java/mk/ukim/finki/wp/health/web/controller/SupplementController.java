package mk.ukim.finki.wp.health.web.controller;

import mk.ukim.finki.wp.health.model.Supplement;
import mk.ukim.finki.wp.health.service.SupplementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/supplements")
public class SupplementController {

    @Autowired
    private final SupplementService supplementService;

    public SupplementController(SupplementService supplementService) {
        this.supplementService = supplementService;
    }

    @GetMapping
    public List<Supplement> getSupplements(){
        return supplementService.getSupplements();
    }

    @GetMapping("/{id}")
    public Supplement getSupplement(@PathVariable String id){
        return supplementService.getSupplement(id);
    }

    @PostMapping
    public Supplement createSupplement(@RequestParam("name") String supplementName,
                                       @RequestParam(value="picUrl",required = false) String supplementPic,
                                       @RequestParam(value="desc",required = false) String supplementDesc,
                                       @RequestParam("price") int supplementPrice,
                                       @RequestParam("grams") float supplementGrams)
    {
       Supplement supplement = new Supplement(supplementName,supplementDesc,supplementPrice,supplementPic,supplementGrams);
       return supplementService.createSupplement(supplement);
    }

    @PatchMapping("/{id}")
    public Supplement editSupplement(@PathVariable String id,
                         @RequestParam("name") String supplementName,
                         @RequestParam(value="picUrl",required = false) String supplementPic,
                         @RequestParam(value="desc",required = false) String supplementDesc,
                         @RequestParam("price") int supplementPrice,
                         @RequestParam("grams") float supplementGrams)
    {
        Supplement supplement = new Supplement(supplementName,supplementDesc,supplementPrice,supplementPic,supplementGrams);
        return supplementService.editSupplement(supplement,id);
    }

    @DeleteMapping("/{id}")
    public void deleteSupplement(@PathVariable String id){
        supplementService.deleteByName(id);
    }

    @PutMapping("/{supplement}/{id}")
    public void addFav(@PathVariable String id,
                       @PathVariable String supplement){
        supplementService.addToCart(id, supplement);
    }

    @DeleteMapping("/{supplement}/delete/{id}")
    public void deleteDietPerson(@PathVariable String id,@PathVariable String supplement){
        supplementService.deleteSupplementPerson(id,supplement);
    }

}
