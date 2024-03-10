import LoginView from "./views/login_view";
import HomeView from "./views/home_view";
import { useState, useEffect } from "react";
import { TokenContext } from "./context/context";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import SearchView from "./views/search_view";
import RecomendationView from "./views/recomendation_view";

function App() {
  let [accessToken, setAccessToken] = useState(null);

  async function login() {
    window.location =
      "https://accounts.spotify.com/authorize?client_id=bb9769557ac24a278ebe08db49e4dc22&redirect_uri=http://localhost:3000/&response_type=token&scope=playlist-modify-private";
  }

  useEffect(() => {
    const hashParam = new URLSearchParams(
      window.location.hash.replace("#", "")
    );

    let token = hashParam.get("access_token");
    console.log(token);

    if (token) {
      setAccessToken(token);
    } else {
      setAccessToken(null);
    }
  }, []);

  return (
    <TokenContext.Provider value={accessToken}>
      <BrowserRouter>
        <div className="flex p-4 items-start gap-x-4">
          {accessToken && (
            <div className="flex-none flex flex-col gap-y-4 w-64 box">
              <Link className="hover:text-white" to="/">
                Recomendation
              </Link>
              <Link className="hover:text-white" to="/search">
                Search
              </Link>
            </div>
          )}
          <div className="flex-grow">
            <Switch>
              <Route exact path="/create-playlist">
                {accessToken ? <HomeView /> : <Redirect to="/" />}
              </Route>
              <Route exact path="/recomendation">
                Recomendation
              </Route>
              <Route exact path="/search">
                <SearchView />
              </Route>
              <Route exact path="/">
                {accessToken ? <RecomendationView /> : <LoginView onClick={login} />}
              </Route>
              <Route exact path="/:playlist">
                Playlist
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}

export default App;
