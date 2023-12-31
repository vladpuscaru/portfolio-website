import styles from "./GithubFeed.module.sass";
import { useEffect, useState } from "react";
import axios from "axios";
import githubIcon from "../../images/ic_github.svg";

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

const GithubFeed = () => {
    const [data, setData] = useState({
        data: null,
        loading: true,
        errors: null
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
                setData({
                    data: data.data.data,
                    loading: false,
                    errors: null
                });
            })
            .catch(error => {
                setData({
                    data: null,
                    loading: false,
                    errors: error
                })
            })
    }, []);

    let weeks = null;
    let user = null;
    if (data.data) {
        weeks = data.data
            .user
            .contributionsCollection
            .contributionCalendar
            .weeks;

        weeks = weeks.slice(weeks.length - 20, weeks.length);

        user = {
            name: data.data.user.login,
            url: `http://github.com/${data.data.user.login}`,
            img: `http://github.com/${data.data.user.login}.png`
        }
    }

    return data.loading || !weeks || data.errors ? "Loading..." :
        (
            <div className={styles.githubfeed}>
                <div className={styles.header}>
                    <a href={user.url} target="_blank">
                        <div>
                            <img src={user.img}/>
                            <h3><span></span>{user.name}</h3>
                        </div>
                        <img src={githubIcon} />
                    </a>
                </div>
                <div className={styles.calendar}>
                    {
                        weeks.map((week, idx) => (
                            <div key={idx} className={styles.week}>
                                {
                                    week.contributionDays.map((day, i) => (
                                        <div key={i} className={`
                                        ${styles.day} 
                                        ${day.contributionCount === 0 ? styles.empty
                                            : (day.contributionCount < 2 ? styles.level1
                                                : day.contributionCount < 4 ? styles.level2
                                                    : day.contributionCount < 6 ? styles.level3
                                                        : styles.level4)}
                                        `}>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className={styles.footer}>

                </div>
            </div>
        )
}

export default GithubFeed;