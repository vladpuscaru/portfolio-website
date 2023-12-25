import styles from "./GithubFeed.module.sass"
import { useEffect, useState } from "react";

const GithubFeed = () => {
    const [githubData, setGithubData] = useState([]);

    const fetchData = () => {
        return fetch(`https://api.github.com/users/vladpuscaru`)
            .then((response) => response.json())
            .then((data) => setGithubData(data));
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className={styles.githubfeed}>
            Github Feed
        </div>
    )
}

export default GithubFeed;