import React, { component } from 'react';

const List = (props) => {
    const {people} = props;
    return people.map((item)=>{
        return (
            <article key={item.id} className="people">
                <img src={item.image} alt={item.name}/>
                <div>
                    <h4> {item.name}</h4>
                    <p> {item.age} years</p>
                </div>
            </article>
        );
    });
}
export default List;