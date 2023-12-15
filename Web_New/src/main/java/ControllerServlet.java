import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import server.Dot;

import java.io.IOException;
import java.util.ArrayList;

@WebServlet(name = "ControllerServlet", value = "/ControllerServlet")
public class ControllerServlet extends HttpServlet {


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (request.getParameter("x") != null & request.getParameter("y") != null & request.getParameter("r") != null) {
            response.sendRedirect(this.getServletContext().getContextPath() + "/AreaCheck?x=" + request.getParameter("x")
                    + "&y=" + request.getParameter("y") + "&r=" + request.getParameter("r"));
        } else {
            HttpSession httpSession = request.getSession();
            httpSession.setAttribute("dotsList", null);
        }

    }


}