package io.faaguila.Disco.endpoint;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetDiscsResponse {
  private List<io.JoJoFa.Vinilo.endpoint.Disc> discs;
}
