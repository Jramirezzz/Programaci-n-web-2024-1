import { useState } from 'react';
import './Filter.css'
import { useTask } from "../../Hooks/useTask"

export function Filter (){

    const {
        setFilter,
    } = useTask()

    const [selectedFilter, setSelectedFilter] = useState('All');

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        setFilter(filter);
    };

    return(
        <section className="container-filter">
            <div className="filters-div">
                <input
                    className="filter"
                    type="radio"
                    id="All"
                    checked={selectedFilter === 'All'}
                    onChange={() => handleFilterChange('All')}
                />
                <label htmlFor="All">All</label>
            </div>

            <div className="filters-div">
                <input
                    className="filter"
                    type="radio"
                    id="Completed"
                    checked={selectedFilter === 'Completed'}
                    onChange={() => handleFilterChange('Completed')}
                />
                <label htmlFor="Completed">Completed</label>
            </div>

            <div className="filters-div">
                <input
                    className="filter"
                    type="radio"
                    id="Pending"
                    checked={selectedFilter === 'Pending'}
                    onChange={() => handleFilterChange('Pending')}
                />
                <label htmlFor="Pending">Pending</label>
            </div>

        </section>
    )
}