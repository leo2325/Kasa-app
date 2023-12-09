/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Card from '../../components/Card';
import {useParams} from 'react-router-dom';


import { datas } from '../../datas/datas';

function showCard() {

    const params = useParams();
    const data = datas.find( d => d.id === params.id);

    return (
        <div>
                <Card 
                    id={data.id}
                    cover={data.cover}
                    title={data.title}
                    location={data.location}
                    name={data.host.name}
                    picture={data.host.picture}  
                    pictures={data.pictures}
                    tags={data.tags}
                    rating={data.rating}
                    description={data.description}
                    equipments={data.equipments}
                />
        </div>
    )
}

export default showCard