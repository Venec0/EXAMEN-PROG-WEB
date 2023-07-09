package io.faaguila.Disco.endpoint;

import io.JoJoFa.Vinilo.endpoint.Disc;
import io.JoJoFa.Vinilo.endpoint.PostDiscResponse;
import io.faaguila.Disco.service.DiscService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class DiscController {
  final private DiscService service;

  @GetMapping("/discs")
  public ResponseEntity<GetDiscsResponse> getDiscs() {
    GetDiscsResponse response = new GetDiscsResponse();
    response.setDiscs(service.getListDiscs());
    return ResponseEntity.ok(response);
  }

  @GetMapping("/discs/{id}")
  public ResponseEntity<GetDiscResponse> getDiscs(@PathVariable("id") int id) {
    Disc discById = service.getDiscById(id);
    if (discById != null) {
      GetDiscResponse response = new GetDiscResponse();
      response.setDisc(discById);
      return ResponseEntity.ok(response);
    } else {
      return ResponseEntity.notFound().build();
    }
  }

  @PostMapping("/Discs")
  public ResponseEntity<PostDiscResponse> post(@RequestBody Disc disc) {
    int id = service.addDisc(disc);
    PostDiscResponse response = new PostDiscResponse();
    response.setId(id);
    return ResponseEntity.ok(response);
  }

  @PutMapping("/discs/{id}")
  public ResponseEntity<io.JoJoFa.Vinilo.endpoint.PutDiscResponse> put(@PathVariable("id") int id, @RequestBody Disc disc){
    Disc updated = service.updateDiscById(id, disc);
    if (updated != null) {
      PutDiscResponse response = new PutDiscResponse();
      response.setDisc(updated);
      return ResponseEntity.ok(response);
    } else {
      return ResponseEntity.badRequest().build();
    }
  }

  @DeleteMapping("/discs/{id}")
  public ResponseEntity<Object> delete(@PathVariable("id") int id) {
    Disc deleted = service.deleteDiscById(id);
    if (deleted != null) {
      DeleteDiscResponse response = new DeleteDiscResponse();
      response.setDisc(deleted);
      return ResponseEntity.ok(response);
    } else {
      return ResponseEntity.badRequest().build();
    }
  }
}
