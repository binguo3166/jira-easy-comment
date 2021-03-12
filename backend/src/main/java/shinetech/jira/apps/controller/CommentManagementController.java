package shinetech.jira.apps.controller;

import com.atlassian.connect.spring.IgnoreJwt;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class CommentManagementController {

    @GetMapping("/comment-management")
    //@IgnoreJwt
    public String helloworld() {
        return "comment-management";
    }
}