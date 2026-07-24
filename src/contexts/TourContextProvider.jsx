import TourContext from "./TourContext";
import React, { useState, useMemo, useContext, useEffect } from 'react'
import mockTours from "../data/tours"

function TourContextProvider({children}) {

    const [tours, setTours] = useState(mockTours);
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [sortBy, setSortBy] = useState("rating");
    const [order, setOrder] = useState("asc");
    const [filters, setFilters] = useState({
        category: "All",
        continent: "All",
        maxDuration: 24,
        maxPrice: 99999,
        minRating: 0,
    })

    const sortTours = (tours, sortBy, order="asc") => {
        let result = [...tours];
        if (!sortBy) return result;

        return result.sort((a, b) => {
            const first = a[sortBy];
            const second = b[sortBy];

            if (typeof first === "string") {
                return (order === "asc"
                ? first.localeCompare(second) // works similar to sort in that it returns -1, 0 or 1 as result of comparison
                : second.localeCompare(first)
                );
            }

            return (order === "asc"
            ? first - second
            : second - first
            );
        })
    }

    const applyFilter = (tours, appliedFilters) => {
        let result = [...tours];
        return result.filter((tour) => (
            (appliedFilters.category == "All" || tour.category == appliedFilters.category)
            && (appliedFilters.continent == "All" || tour.continent == appliedFilters.continent)
            && tour.duration <= appliedFilters.maxDuration
            && tour.rating >= appliedFilters.minRating
            && tour.price <= appliedFilters.maxPrice
        ));
    }

    const getSearchResults = (tours, search) => {
        if (!search) return tours;

        const query = search.toLowerCase();
        return tours.filter(tour =>
            tour.title.toLowerCase().includes(query) ||
            tour.subtitle.toLowerCase().includes(query) ||
            tour.country.toLowerCase().includes(query) ||
            tour.city.toLowerCase().includes(query) ||
            tour.description.toLowerCase().includes(query)
        );
    }

    const visibleTours = useMemo(() => {
        let result = [...tours];
        
        result = getSearchResults(result, search);
        console.log("After search:", result.length);
        result = applyFilter(result, filters);
        console.log("After filter:", result.length);
        result = sortTours(result, sortBy, order);
        console.log("After sort:", result.length);
        

        return result;
    }, [tours, search, filters, sortBy, order]);

    useEffect(() => {
        try {
            const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            setFavorites(favorites);
        } catch (err) {
            console.error("Failed to load favorites:", err);
        }
    }, []);

  return (
    <TourContext.Provider
        value={{
            tours,
            visibleTours,

            search,
            setSearch,

            filters,
            setFilters,

            sortBy,
            setSortBy,

            order,
            setOrder,

            favorites,
            setFavorites,

        }}
    >
        {children}
    </TourContext.Provider>
  )
}

export default TourContextProvider;
