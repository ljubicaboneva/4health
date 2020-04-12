package mk.ukim.finki.wp.health.service;


import mk.ukim.finki.wp.health.model.Supplement;

import java.util.List;

public interface SupplementService {

    List<Supplement> getSupplements();

    Supplement createSupplement(Supplement supplement);

    Supplement editSupplement(Supplement supplement, String name);

    void deleteByName(String name);

    Supplement getSupplement(String name);

    void addToCart(String user,String exercise);

    void deleteSupplementPerson(String user,String exercise);

}
