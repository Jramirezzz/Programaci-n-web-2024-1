import { useState } from 'react';
import './Filter.css'

export function Filter (props){
    const { onChangeFilter } = props;
    const [selectedFilter, setSelectedFilter] = useState('All');

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        onChangeFilter(filter);
    };

    return(
        <section className="ContainerFilter">
            <div>
                <input
                    className="Input"
                    type="radio"
                    id="All"
                    checked={selectedFilter === 'All'}
                    onChange={() => handleFilterChange('All')}
                />
                <label htmlFor="All">All</label>
            </div>

            <div>
                <input
                    className="Input"
                    type="radio"
                    id="Completed"
                    checked={selectedFilter === 'Completed'}
                    onChange={() => handleFilterChange('Completed')}
                />
                <label htmlFor="Completed">Completed</label>
            </div>

            <div>
                <input
                    className="Input"
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