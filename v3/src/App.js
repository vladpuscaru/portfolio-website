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
    const [windowData, setWindowData] = useState({
        scroll: {
            x: 0,
            y: 0
        },
        size: {
            x: window.innerWidth,
            y: window.innerHeight,
        },
        mobile: window.innerWidth < 768
    });
    const [github, setGithub] = useState({
        data: null,
        loading: true
    });
    const [active, setActive] = useState({
        section: -1,
        project: -1,
        menu: windowData.mobile ? false : true,
        main: windowData.mobile ? true : false,
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

    const updateWindowData = () => {
        setWindowData({
            ...windowData,
            scroll: {
                x: window.scrollX,
                y: window.scrollY
            },
            size: {
                x: window.innerWidth,
                y: window.innerHeight
            },
            mobile: window.innerWidth <= 768
        });
    };

    useEffect(() => {
        if (windowData.mobile) {
            let activeSection = -1;

            const abSection = document.getElementById("about");
            const prSection = document.getElementById("projects");
            const reSection = document.getElementById("resume");


            if (abSection && prSection && reSection) {
                const abScroll = abSection.offsetTop;
                const prScroll = prSection.offsetTop;
                const reScroll = reSection.offsetTop;

                if (windowData.scroll.y > abScroll) activeSection = 0;
                if (windowData.scroll.y > prScroll) activeSection = 1;
                if (windowData.scroll.y > reScroll) activeSection = 2;

                setActive({
                    ...active,
                    section: activeSection
                });
            }
        }
    }, [windowData.mobile, windowData.scroll]);

    useEffect(() => {
        const watch = () => {
            window.addEventListener("scroll", updateWindowData);
            window.addEventListener("resize", updateWindowData);
        }
        watch();
        return () => {
            window.removeEventListener("scroll", updateWindowData);
            window.removeEventListener("resize", updateWindowData);
        };
    });

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
                project: -1,
                menu: false,
                main: true,
                footer: true,
                section
            });
        }
    }

    const onProjectItemClick = (project) => {
        setActive({
            ...active,
            project
        });
    }

    return (
        <div className="App">
            {
                github.loading ? "Loading..."
                    :
                    <Fragment>
                        <Menu active={active.menu} activeSection={active.section} activeProject={active.project}
                              onMenuItemClick={onMenuItemClick}/>
                        <div className={"content"}>
                            <div className={"main"}>
                                <Main active={active.main} mobile={windowData.mobile} activeSection={active.section}
                                      activeProject={active.project}
                                      onMenuItemClick={onMenuItemClick}
                                      onProjectItemClick={onProjectItemClick}/>
                            </div>
                            <div className={"footer"}>
                                <Footer active={active.footer} mobile={windowData.mobile} activeSection={active.section}
                                        onMenuItemClick={onMenuItemClick} githubData={github.data}/>
                            </div>
                        </div>
                    </Fragment>
            }
        </div>
    );
}

export default App;
