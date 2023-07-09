package io.JoJoFa.Vinilo.repository;

import io.JoJoFa.Vinilo.repository.model.DiscEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<DiscEntity, Integer> {
}
