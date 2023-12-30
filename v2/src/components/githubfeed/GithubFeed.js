import styles from "./GithubFeed.module.sass";
import { useEffect, useState } from "react";
import axios from "axios";

const query = `query{ 
  user(login: "vladpuscaru"){
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
                    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            })
            .then(data => {
                setData({
                    data: data,
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

    return data.loading ? "Loading..." :
        (
            <div className={styles.githubfeed}>
                Github Feed
            </div>
        )
}

export default GithubFeed;