import React from 'react';
import  './Table.css';
import Layout from '../../components/Layout/Layout'
import moch from '../Table/mock'

const Table = () => {
    return (
        <Layout>
            <div className="table__wrapper">
                <div className="table__header">
                    <a href="#english">English Premier League</a>
                    <a href="#german">German 1. Bundesliga</a>
                    <a href="#spanish">Spanish Primera</a>
                    <a href="#italian">Italian Serie A</a>
                    <a href="#french">French League 1</a>
                </div>
                <div className="table">
                    
                </div>
            </div>
            
        </Layout>
    )
}
export default Table;