package mk.ukim.finki.wp.demo.filters;

import io.micrometer.core.instrument.util.StringUtils;
import mk.ukim.finki.wp.demo.model.Person;
import mk.ukim.finki.wp.demo.web.controller.PersonController;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;


@WebFilter
public class PersonFilter implements Filter {

    @Override
    public void init(FilterConfig config) throws ServletException {

    }


    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {

        HttpServletRequest request = (HttpServletRequest) req;

        HttpSession session = request.getSession();

        Person person = (Person) request.getAttribute("person");

        if((person != null)){
            ((HttpServletResponse) resp).sendRedirect("/");

        }
        else {

            chain.doFilter(req, resp);
        }
    }

    @Override
    public void destroy() {
    }

}