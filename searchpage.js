import RegisterPage from "../../support/pageclasses/Register";
import SearchPage from "../../support/pageclasses/searchpage";

describe('search page', () => {

    const searchobj = new SearchPage
    const registerobj = new RegisterPage

    it('Add to cart', () => {
        // Enter url
        registerobj.Enterurl();

        // Register
        registerobj.RegisterPage();

        // Enter url
        searchobj.Enterurl();

        // Search add to cart
        searchobj.SearchPage();
        
    });
});