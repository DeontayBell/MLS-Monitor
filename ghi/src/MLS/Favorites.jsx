import React, { useEffect, useState } from "react";
import { useGetTokenQuery } from "./app/apiSlice";
import Footer from "./Footer";
import "./styles/Favorites.css";


const Favorites = () => {
    const [favoriteTeams, setFavorites] = useState([])
    const { data: account } = useGetTokenQuery();


    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(favorites);
    }, [account]);
    if (!account) {
      return <div>You must be logged in to view this page.</div>;
    }

    return (
      <div className="favorites-container">
        <div>
          <h2> Your Favorite Teams</h2>
          {favoriteTeams.length === 0 ? (
            <p>No favorite teams yet.</p>
          ) : (
            <ul>
              {favoriteTeams.map((teamName, index) => (
                <li key={index}>{teamName}</li>
              ))}
            </ul>
          )}
          <Footer />
        </div>
      </div>
    );
}
export default Favorites;
