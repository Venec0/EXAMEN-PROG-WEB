package io.faaguila.Disco.service;

import io.JoJoFa.Vinilo.endpoint.Disc;
import io.JoJoFa.Vinilo.endpoint.User;
import io.JoJoFa.Vinilo.repository.model.DiscEntity;
import io.JoJoFa.Vinilo.repository.DiscRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class DiscService {

    private final DiscRepository userRepository;

    public List<Disc> getListUsers() {
        List<DiscEntity> all = (List<DiscEntity>)discRepository.findAll();
        List<Disc> discs = new ArrayList<>();
        for(DiscEntity ue: all){
            Disc disc = new Disc();
            disc.setId(ue.getId());
            disc.setNombre(ue.getNombre());
            disc.setDescripcion(ue.getDescripcion());
            disc.setPrecio(ue.getPrecio());
            disc.setRole(ue.getRole().getNombre());
            discs.add(disc);
        }
        return discs;
    }

    public Disc getDiscById(int id) {
        Optional<DiscEntity> byId = discRepository.findById(id);
        if(byId.isPresent()){
            DiscEntity ue = byId.get();
            Disc disc = new Disc();
            disc.setId(ue.getId());
            disc.setUsername(ue.getUsername());
            disc.setPassword(ue.getPassword());
            disc.setEmail(ue.getEmail());
            return disc;
        }

        return null;
    }

    public int addDisc(Disc disc) {
        DiscEntity newDisc = new DiscEntity();
        newDisc.setNombre(disc.getNombre());
        newDisc.setDescripcion(disc.getDescripcion());
        newDisc.setPrecio(disc.getPrecio());
        DiscEntity saved = discRepository.save(newDisc);
        return saved.getId();
    }

    public Disc deleteDiscById(int id) {
        List<Disc> discs = getListDiscs();
        for (Disc disc : discs) {
            if (disc.getId() == id) {
                discs.remove(disc);
                return disc;
            }
        }
        return null;
    }

    public Disc updateDiscById(int id, Disc modifiedDisc) {
        List<Disc> discs = getListDiscs();
        for (Disc disc : discs) {
            if (disc.getId() == id) {
                disc.setNombre(modifiedDisc.getNombre());
                disc.setDescripcion(modifiedDisc.getDescripcion());
                disc.setPrecio(modifiedDisc.getPrecio());
                return disc;
            }
        }
        return null;
    }
}
