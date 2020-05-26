import React, { Component } from 'react'
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktail",
                info: 'Historic Hoi An has become a flourishing commercial port town, renowned for its gracious hospitality. Four km from the town’s ancient quarter' +
                    'in between De Vong River and Cua Dai beach, is Hoi An Beach Resort – “An Oasis of Peace Where The River Meets The Ocean'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'Historic Hoi An has become a flourishing commercial port town, renowned for its gracious hospitality. Four km from the town’s ancient quarter' +
                    'in between De Vong River and Cua Dai beach, is Hoi An Beach Resort – “An Oasis of Peace Where The River Meets The Ocean'
            },
            {
                icon: <FaShuttleVan />,
                title: "free Shuttle",
                info: 'Historic Hoi An has become a flourishing commercial port town, renowned for its gracious hospitality. Four km from the town’s ancient quarter' +
                    'in between De Vong River and Cua Dai beach, is Hoi An Beach Resort – “An Oasis of Peace Where The River Meets The Ocean'
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beers",
                info: 'Historic Hoi An has become a flourishing commercial port town, renowned for its gracious hospitality. Four km from the town’s ancient quarter' +
                    'in between De Vong River and Cua Dai beach, is Hoi An Beach Resort – “An Oasis of Peace Where The River Meets The Ocean'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
