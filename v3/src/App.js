import "./common/sass/general.sass";
import Menu from "./components/Menu/Menu";
import { Fragment, useEffect, useState } from "react";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import axios from "axios";

const token = process.env.REACT_APP_GITHUB_TOKEN;
const query = `query{ 
  user(login: "vladpuscaru"){
    login,
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}`;

function App() {
    const [github, setGithub] = useState({
        data: null,
        loading: true
    });
    const [active, setActive] = useState({
        section: -1,
        menu: true,
        main: false,
        footer: false
    });

    useEffect(() => {
        axios.post("https://api.github.com/graphql",
            JSON.stringify({query: query}),
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(data => {
                setGithub({
                    data: data.data.data,
                    loading: false,
                    errors: null
                });
            })
            .catch(error => {
                setGithub({
                    data: null,
                    loading: false,
                    errors: error
                })
            })
    }, []);

    const onMenuItemClick = (section) => {
        if (section === undefined) {
            setActive({
                ...active,
                menu: !active.menu,
                main: !active.main,
                footer: !active.footer
            })
        } else {
            setActive({
                ...active,
                menu: false,
                main: true,
                footer: true,
                section
            });
        }
    }

    return (
        <div className="App">
            {
                github.loading ? "Loading..."
                    :
                    <Fragment>
                        <Menu active={active.menu} activeSection={active.section} onMenuItemClick={onMenuItemClick}/>
                        <div className={"content"}>
                            <div className={"main"}>
                                <Main active={active.main} activeSection={active.section}/>
                            </div>
                            <div className={"footer"}>
                                <Footer active={active.footer} activeSection={active.section}
                                        onMenuItemClick={onMenuItemClick} githubData={github.data}/>
                            </div>
                        </div>
                    </Fragment>
            }
        </div>
    );
}

export default App;
