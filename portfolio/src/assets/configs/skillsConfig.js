import React from "react";
import {GrMysql} from "react-icons/gr";
import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiAmazonaws,
    SiGithub,
    SiNumpy,
    SiPandas,
    SiScikitlearn,
    SiKeras,
    SiLinux,
    SiPytorch,
    SiGrafana,
    SiMysql,
} from "react-icons/si";
import {
    FaGitAlt,
    FaServer,
    FaDatabase,
    FaBrain,
    FaChartLine,
    FaRegChartBar,
    FaHeartbeat,
    FaCube
} from "react-icons/fa";

const skillsConfig = {
    mainSkills: [
        { id: "skills-0",className: "skill-icon",icon: <SiPython size={50}/>,text: "Python"},
        { id: "skills-1", className: "skill-icon", icon: <FaDatabase size={50}/>, text: "PostgreSQL"},
        { id: "skills-2",className: "skill-icon",icon: <SiDocker size={50}/>,text: "Docker"},
        { id: "skills-3",className: "skill-icon",icon: <FaGitAlt size={50}/>,text: "Git"},
        { id: "skills-4", className: "skill-icon", icon: <SiNumpy size={50}/>, text: "Numpy" },
        { id: "skills-5", className: "skill-icon", icon: <SiPandas size={50}/>, text: "Pandas" },
        { id: "skills-6", className: "skill-icon", icon: <SiScikitlearn size={50}/>, text: "Scikit-learn" },
        { id: "skills-7", className: "skill-icon", icon: <SiPytorch size={50}/>, text: "PyTorch" },
        { id: "skills-8", className: "skill-icon", icon: <SiLinux size={50}/>, text: "Linux" },
        { id: "skills-9", className: "skill-icon", icon: <SiKeras size={50}/>, text: "Keras" },
        { id: "skills-10", className: "skill-icon", icon: <FaBrain size={50}/>, text: "Deep Learning" },
        { id: "skills-11", className: "skill-icon", icon: <FaChartLine size={50}/>, text: "Time-series Analysis" },


    ],
    complementarySkills: [
        { id: "skills-12", className: "skill-icon", icon: <SiAmazonaws size={50}/>, text: "AWS" },
        { id: "skills-13", className: "skill-icon", icon: <SiGrafana size={50}/>, text: "Grafana" },
        { id: "skills-14", className: "skill-icon", icon: <FaServer size={50}/>, text: "MLOps" },
        { id: "skills-15", className: "skill-icon", icon: <FaHeartbeat size={50}/>, text: "Digital Health" },
        { id: "skills-16", className: "skill-icon", icon: <FaCube size={50}/>, text: "AWS S3" },
        { id: "skills-17", className: "skill-icon", icon: <FaRegChartBar size={50}/>, text: "Explainable AI" },
    ]
}
export default skillsConfig
