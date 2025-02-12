import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "../../assets/symbol-defs.svg";
import css from "./UsersList.module.css";
import axios from "axios";

export interface userProps {
  name: string;
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  repos_url: string;
}

function UserList() {
  const [users, setUsers] = useState<userProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users`);
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Błąd API:", error);
        setError("Błąd podczas pobierania użytkowników.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Ładowanie...</p>;
  if (error) return <p className={css.error}>{error}</p>;

  return (
    <section className={css.section}>
      <ul className={css.usersList}>
        {users.map(({ login, id, avatar_url, html_url }, index) => (
          <li key={index} className={css.userCard}>
            <div className={css.infoContainer}>
              <img src={avatar_url} className={css.avatar} />
              <div className={css.positionControl}>
                <div>
                  <p className={css.text}>@{login}</p>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className={css.subtext}>ID: #{id}</p>
                  </div>
                </div>
                <div className={css.flow}>
                  <a href={html_url} className={css.subtext}>
                    <svg className={css.icon}>
                      <use href={GitHubIcon}></use>
                    </svg>
                    GitHub users
                  </a>
                </div>
              </div>
            </div>
            <div className={css.btnContainer}>
              <Link to={`/users/${login}`} className={css.link}>
                Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UserList;
