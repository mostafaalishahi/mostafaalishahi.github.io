import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye, AiFillApi} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import kafkaMl from "../images/kafkaml.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    // {
    //     id: "project-5",
    //     title: "Sklearn Genetic Opt",
    //     links: [
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt",
    //             icon: <AiFillGithub/>,
    //         },
    //         {
    //             name: "fork",
    //             url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork",
    //             icon: <BiGitRepoForked/>,
    //         },
    //         {
    //             name: "subscription",
    //             url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription",
    //             icon: <AiFillEye/>,
    //         },
    //         {
    //             name: "docs",
    //             url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/",
    //             icon: <ImBook/>,
    //         }
    //     ],
    //     image: sklearnGenetic,
    //     description: "scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",
    //     target: "_blank"
    // },
    // {
    //     id: "project-4",
    //     title: "Graphs Embeddings",
    //     links: [
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/Graph-Embeddings",
    //             icon: <AiFillGithub/>,
    //         },
    //         {
    //             name: "fork",
    //             url: "https://github.com/rodrigo-arenas/Graph-Embeddings/fork",
    //             icon: <BiGitRepoForked/>,
    //         },
    //         {
    //             name: "subscription",
    //             url: "https://github.com/rodrigo-arenas/Graph-Embeddings/subscription",
    //             icon: <AiFillEye/>,
    //         },
    //         {
    //             name: "docs",
    //             url: "https://graph-embeddings.readthedocs.io/",
    //             icon: <ImBook/>,
    //         }
    //     ],
    //     image: graphEmbeddings,
    //     description: "Graph embeddings for downstream tasks.",
    //     target: "_blank"
    // },
    // {
    //     id: "project-3",
    //     title: "Kafkaml Anomalies",
    //     links: [
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",
    //             icon: <AiFillGithub/>
    //         },
    //         {
    //             name: "fork",
    //             url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork",
    //             icon: <BiGitRepoForked/>
    //         },
    //         {
    //             name: "subscription",
    //             url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",
    //             icon: <AiFillEye/>
    //         }
    //     ],
    //     image: kafkaMl,
    //     description: "Project for real-time anomaly detection using kafka and python.",
    //     target: "_blank"
    // },
    // {
    //     id: "project-2",
    //     title: "Pyworkforce",
    //     links: [
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/pyworkforce",
    //             icon: <AiFillGithub/>
    //         },
    //         {
    //             name: "fork",
    //             url: "https://github.com/rodrigo-arenas/pyworkforce/fork",
    //             icon: <BiGitRepoForked/>
    //         },
    //         {
    //             name: "subscription",
    //             url: "https://github.com/rodrigo-arenas/pyworkforce/subscription",
    //             icon: <AiFillEye/>
    //         },
    //         {
    //             name: "docs",
    //             url: "https://pyworkforce.readthedocs.io/en/stable/",
    //             icon: <ImBook/>,
    //         }
    //     ],
    //     image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
    //     description: "Standard tools for workforce management, queuing, scheduling, rostering and optimization problems.",
    //     target: "_blank"
    // },
    {
        id: "project-1",
        title: "Genetic Engineering Attribution Challenge",
        links: [
            {
                name: "repo",
                url: "https://www.drivendata.org/competitions/63/genetic-engineering-attribution/",
                icon: <AiFillApi/>
            },
            
            {
                name: "repo",
                url: "https://github.com/mostafaalishahi/Genetic_engineering_attribution_challenge_2020",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/mostafaalishahi/Genetic_engineering_attribution_challenge_2020/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/mostafaalishahi/Genetic_engineering_attribution_challenge_2020/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: sklearnGenetic,
        description: "This repository contains the code for the Genetic Engineering Attribution Challenge."+
         "The objective of this challenge is to predict the laboratory of origin for plasmid DNA sequences."+
         "Ranked 14 out of 1139 teams ",
        target: "_blank"
    }
]

export default projectConfig