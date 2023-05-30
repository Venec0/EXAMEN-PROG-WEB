package io.cmartinezs.democrud.endpoint;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GetUsersResponse {
    private List<User> users;
}
