import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GitHubIcon from "../../assets/symbol-defs.svg";
import css from "./UserDetails.module.css";
import { userProps } from "../UsersList/UsersList";

interface Repository {
  id: number;
  name: string;
  html_url: string;
}

function UserDetails() {
  const { login } = useParams();
  const [user, setUser] = useState<userProps | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userResponse = await axios.get(
          `https://api.github.com/users/${login}`
        );
        const reposResponse = await axios.get(
          `https://api.github.com/users/${login}/repos`
        );
        console.log(userResponse.data);
        setUser(userResponse.data);
        console.log(reposResponse.data);
        setRepos(reposResponse.data);
      } catch (error) {
        console.error("Błąd API:", error);
        setError("Błąd podczas pobierania danych użytkownika.");
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, [login]);

  if (loading) return <p>Ładowanie...</p>;
  if (error) return <p className={css.error}>{error}</p>;

  return (
    <section className={css.section}>
      {user && (
        <div className={css.userCard}>
          <h2 className={css.title} style={{ marginBottom: "15px" }}>
            Profile
          </h2>
          <div className={css.infoContainer}>
            <img src={user.avatar_url} alt={user.name} className={css.avatar} />
            <div className={css.positionControl}>
              <div>
                <p className={css.title}>{user.name}</p>
                <p className={css.text}>@{user.login}</p>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p className={css.subtext}>ID: #{user.id}</p>
                </div>
              </div>
              <div className={css.flow}>
                <a href={user.html_url} className={css.subtext}>
                  <svg className={css.icon}>
                    <use href={GitHubIcon}></use>
                  </svg>
                  GitHub users
                </a>
              </div>
            </div>
          </div>
          <h2 className={css.title} style={{ marginBottom: "15px" }}>
            Repositories
          </h2>
          <p style={{ fontWeight: 600 }}>Repositories count: {repos.length}</p>
          <p style={{ fontWeight: 600 }}>Repositories list:</p>
          <ul className={css.repoList}>
            {repos.map((repo) => (
              <li key={repo.id} className={css.repoList}>
                <a href={repo.html_url} className={css.link}>
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default UserDetails;
