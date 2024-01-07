import "./common/sass/general.sass";
import Menu from "./components/Menu/Menu";
import { Fragment, useEffect, useState } from "react";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import 'react-image-lightbox/style.css';

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
        location: window.location,
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
            mobile: window.innerWidth <= 768,
        });
    };

    const onBackBtnPressed = () => {
        if (windowData.mobile) {
            setActive({
                ...active,
                project: -1
            });
        } else {
            setWindowData({
                ...windowData,
                location: window.location
            });
        }
    }

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
            window.addEventListener('popstate', onBackBtnPressed);
        }
        watch();
        return () => {
            window.removeEventListener("scroll", updateWindowData);
            window.removeEventListener("resize", updateWindowData);
            window.removeEventListener('popstate', onBackBtnPressed);
        };
    });

    useEffect(() => {
        const path = window.location.pathname.split("?")[0];
        const params = new URLSearchParams(window.location.search);
        const menu = params.get('menu');

        const hash = window.location.hash;

        if (menu) {
            setActive({
                ...active,
                menu: true,
                main: false,
                footer: false
            });
        } else if (windowData.mobile && active.menu && !menu) {
            setActive({
                ...active,
                menu: false,
                main: true,
                footer: false
            });
        } else if (windowData.mobile && hash) {
          const section = hash.split("#")[1] === 'about' ? 0 : hash.split("#")[1] === 'projects' ? 1 : 2;
            // eslint-disable-next-line no-restricted-globals
          history.pushState({}, "", window.location.origin)
          setActive({
              ...active,
              project: -1,
              menu: false,
              main: true,
              footer: true,
              section
          });
        } else if (!windowData.mobile && path === '/') {
            setActive({
                ...active,
                menu: true,
                main: false,
                footer: false
            });
        } else if (path === '/about') {
            setActive({
                ...active,
                project: -1,
                menu: false,
                main: true,
                footer: true,
                section: 0
            });
        } else if (path === '/projects') {
            setActive({
                ...active,
                project: -1,
                menu: false,
                main: true,
                footer: true,
                section: 1
            });
        } else if (path === '/resume') {
            setActive({
                ...active,
                project: -1,
                menu: false,
                main: true,
                footer: true,
                section: 2
            });
        } else if (path.split("/")[1] === 'projects' && path.split("/")[2]) {
            setActive({
                ...active,
                project: +(path.split("/")[2]),
                menu: false,
                main: true,
                footer: true,
                section: 1
            });
        }
    }, [windowData]);

    const onMenuItemClick = (section) => {
        if (windowData.mobile) {
            if (section === undefined) {
                setActive({
                    ...active,
                    menu: !active.menu
                });
            } else {
                // eslint-disable-next-line no-restricted-globals
                history.pushState({}, null, window.location.origin);
                setActive({
                    ...active,
                    section,
                    project: -1,
                    menu: false
                });
            }
        } else {
            let newPath = "";

            // eslint-disable-next-line default-case
            switch (section) {
                case undefined:
                    if (windowData.mobile) {
                        newPath = active.menu ? '' : "?menu=true";
                    } else {
                        newPath = active.menu ? window.location.pathname.split("?")[0] : "?menu=true";
                    }
                    break;
                case 0:
                    newPath = "about";
                    break;
                case 1:
                    newPath = "projects";
                    break;
                case 2:
                    newPath = "resume";
                    break;
            }

            // eslint-disable-next-line no-restricted-globals
            history.pushState(null, "", `${window.location.origin}/${newPath}`);

            setWindowData({
                ...windowData,
                location: window.location
            });
        }
    }

    const onProjectItemClick = (project) => {

        const newPath = `projects/${project}`;

        // eslint-disable-next-line no-restricted-globals
        history.pushState({}, "", `${window.location.origin}/${newPath}`);

        setWindowData({
            ...windowData,
            location: window.location
        });
    }

    return (
        <div className="App">
            {
                github.loading ? "Loading..."
                    :
                    <Fragment>
                        <Menu active={active.menu} mobile={windowData.mobile} activeSection={active.section}
                              activeProject={active.project}
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
