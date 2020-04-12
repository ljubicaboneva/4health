package mk.ukim.finki.wp.demo.service.impl;

import mk.ukim.finki.wp.demo.listener.AppContextListener;
import mk.ukim.finki.wp.demo.model.Person;
import mk.ukim.finki.wp.demo.model.Supplement;
import mk.ukim.finki.wp.demo.model.exeptions.InvalidPersonException;
import mk.ukim.finki.wp.demo.model.exeptions.InvalidSupplementException;
import mk.ukim.finki.wp.demo.model.exeptions.SupplementAlreadyExistsException;
import mk.ukim.finki.wp.demo.repository.PersonRepository;
import mk.ukim.finki.wp.demo.repository.SupplementRepository;
import mk.ukim.finki.wp.demo.service.SupplementService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Iterator;
import java.util.List;

@Service
public class SupplementServiceImpl implements SupplementService {

    private final SupplementRepository supplementRepository;
    private final PersonRepository personRepository;
    private final Logger logger = LoggerFactory.getLogger(AppContextListener.class);

    public SupplementServiceImpl(SupplementRepository supplementRepository, PersonRepository personRepository) {
        this.supplementRepository = supplementRepository;
        this.personRepository = personRepository;
    }

    @Override
    public List<Supplement> getSupplements() {
        return supplementRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
    }

    @Override
    public Supplement createSupplement(Supplement supplement) {
        Supplement tmp = supplementRepository.findByName(supplement.getName());
        if (tmp != null) {
            throw new SupplementAlreadyExistsException(supplement.getName());
        }
        logger.info("[WP-Log] {Post createSupplement}");
        return this.supplementRepository.save(supplement);
    }

    @Override
    public Supplement editSupplement(Supplement supplement, String name) {
        Supplement s = this.supplementRepository.findByName(name);
        exception(s,name);
        s.setName(supplement.getName());
        s.setDesc(supplement.getDesc());
        s.setGrams(supplement.getGrams());
        s.setPicUrl(supplement.getPicUrl());
        s.setPrice(supplement.getPrice());
        logger.info("[WP-Log] {Patch editSupplement}");
        return this.supplementRepository.save(s);
    }

    @Transactional
    @Override
    public void deleteByName(String name) {
        this.supplementRepository.deleteByName(name);
        logger.info("[WP-Log] {Delete deleteByName}");
    }

    @Override
    public Supplement getSupplement(String name) {
        Supplement s = this.supplementRepository.findByName(name);
        exception(s,name);
        return s;
    }

    @Override
    public void addToCart(String user, String name) {

        Person person = personRepository.findByUserId(user);
        if(person==null){
            throw new InvalidPersonException(user);
        }
        Supplement supplement = supplementRepository.findByName(name);
        exception(supplement,name);
        if(!person.getSupplements().contains(supplement)){
            supplement.addPerson(person);
            supplement.setAddedToCart("1");
            supplementRepository.save(supplement);
        }
        logger.info("[WP-Log] {Put addToCart}");
    }

    @Override
    public void deleteSupplementPerson(String user, String name) {
        Supplement supplement = supplementRepository.findByName(name);
        exception(supplement,name);
        for (Iterator<Person> iterator = supplement.getPeopleS().iterator(); iterator.hasNext(); ) {
            Person value = iterator.next();
            if (value.getUserId().equals(user)) {
                iterator.remove();
                supplement.setAddedToCart("0");
            }
            supplementRepository.save(supplement);
            personRepository.save(value);
            logger.info("[WP-Log] {Delete deleteSupplementPerson}");
        }
    }

    void exception(Supplement supplement,String name){
        if(supplement==null){
            throw new InvalidSupplementException(name);
        }
    }
}
