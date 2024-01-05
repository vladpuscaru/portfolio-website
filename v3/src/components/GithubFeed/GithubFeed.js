import styles from "./GithubFeed.module.sass";
import githubIcon from "../../common/images/icons8-github.svg";
import { ReactSVG } from "react-svg";

const GithubFeed = ({data}) => {
    let weeks = null;
    let user = null;
    if (data) {
        weeks = data
            .user
            .contributionsCollection
            .contributionCalendar
            .weeks;

        weeks = weeks.slice(weeks.length - 30, weeks.length);

        user = {
            name: data.user.login,
            url: `http://github.com/${data.user.login}`,
            img: `http://github.com/${data.user.login}.png`
        }
    }

    return data ? (
        <div className={styles.githubfeed}>
            <div className={styles.header}>
                <a href={user.url} target="_blank">
                    <div>
                        <img src={user.img}/>
                        <h3><span></span>{user.name}</h3>
                    </div>
                    <ReactSVG src={githubIcon}/>
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
    ) : "No Github Data";
}

export default GithubFeed;