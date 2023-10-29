import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Mostafa Sheikhalishahi</strong>
        </h1>,
    titles: [
        "Data Scientist",
        "Machine Learning Specialist",
    ],
    about: {
        start:"I am an AI Postdoc researcher and a data scientist with a strong background in healthcare applications."+
        " I have led research projects focused on improving patient care in Intensive Care Units (ICUs)."+ 
        "My work integrates cutting-edge techniques such as federated learning and explainable AI to develop interpretable and privacy-preserving models."+
        "My contributions have been published in reputable journals.",
        exit:"I am fluent in Python, SQL databases, ML frameworks, and more, "+
        "with a deep interest in machine learning and time-series data analysis."
        },
    workTimeline: [
        {
            id: "work-2",
            title: "Post-doctoral Researcher",
            company: "UK Augsburg",
            description: "Developing the SAFICU project, which focuses on applying machine learning techniques to improve pa- tient care in Intensive Care Units (ICUs) " +
                "Overseeing M.Sc. and B.Sc. students, providing guidance and mentorship in their research projects"+
                "Conducting cutting-edge research on federated learning",
            date: "2021-present",
            icon: <DiCodeigniter/>,
            tags: ["ml", "fl", "python", "docker","flower", "kubeflow", "mlflow", "weights&biases"]
        },
        {
            id: "work-1",
            title: "Research Fellow",
            company: "FBK, Italy",
            description: "Applied machine learning techniques to analyze ICU’s electronic health records, aiming to detect and predict various clinical outcomes, contributing to improved patient care." +
                "Published multiple scientific articles in peer-reviewed journals, showcasing research contributions and innovations in the field of AI and healthcare." +
                "Utilized machine learning algorithms to detect anomalies in wastewater plants",
            date: "2017-2021",
            icon: <GiCommercialAirplane/>,
            tags: ["ml", "postgres", "python", "pytorch", "captum"]
        },
        {
            id: "work-0",
            title: "ML Intern",
            company: "ALTILIA s.r.l.",
            description: "Developed and implemented natural language processing methods, leveraging techniques such as text classification and sentiment analysis.",
            date: "2016-2017",
            icon: <BsClipboardData/>,
            tags: ["ml","python", "pandas", "kersa"]
        }
    ]
}


export default homeConfig