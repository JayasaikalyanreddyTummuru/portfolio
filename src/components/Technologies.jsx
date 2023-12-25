import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import aws from "../assets/aws.jpeg";
import bootstrap from "../assets/bootstrap.jpeg";
import docker from "../assets/docker.png";
import dynamo from "../assets/dynamo.png";
import express from "../assets/express.png";
import git from "../assets/git.png";
import java from "../assets/java.png";
import jest from "../assets/jest.png";
import json from "../assets/json.jpeg";
import junit from "../assets/junit.png";
import kafka from "../assets/kafka.png";
import microservices from "../assets/microservices.png";
import mockito from "../assets/mockito.jpeg";
import mongo from "../assets/mongo.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import python from "../assets/python.jpeg";
import redux from "../assets/redux.png";
import rest from "../assets/rest.png";
import spring from "../assets/spring.jpeg";
import springboot from "../assets/springboot.png";
import sql from "../assets/sql.png";


const Technologies = () => {
    const techs = [
        {
          id: 1,
          src: java,
          title: "Java",
          style: "shadow-white",
        },
        {
            id: 2,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 3,
            src: python,
            title: "Python",
            style: "shadow-white",
        },

        {
          id: 4,
          src: spring,
          title: "Spring",
          style: "shadow-green-500",
        },
        {
          id: 5,
          src: springboot,
          title: "SpringBoot",
          style: "shadow-white",
        },
        {
            id: 6,
            src: kafka,
            title: "Kafka",
            style: "shadow-white",
        },
        {
            id: 7,
            src: microservices,
            title: "Microservices",
            style: "shadow-white",
        },
        {
            id: 8,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 9,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 10,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
          },
          {
            id: 11,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
          },
          {
            id: 12,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-400",
          },
          {
            id: 13,
            src: json,
            title: "JSON",
            style: "shadow-white",
          },
          {
            id: 14,
            src: redux,
            title: "Redux",
            style: "shadow-white",
          },
          {
            id: 15,
            src: node,
            title: "Node",
            style: "shadow-white",
          },
          {
            id: 16,
            src: express,
            title: "Express",
            style: "shadow-white",
          },
          {
            id: 17,
            src: rest,
            title: "REST",
            style: "shadow-white",
          },
        {
          id: 18,
          src: graphql,
          title: "GraphQL",
          style: "shadow-pink-400",
        },
        {
            id: 19,
            src: junit,
            title: "JUnit",
            style: "shadow-white",
        },
        {
            id: 20,
            src: mockito,
            title: "Mockito",
            style: "shadow-white",
        },
        {
            id: 21,
            src: jest,
            title: "Jest",
            style: "shadow-white",
        },
        {
            id: 22,
            src: sql,
            title: "SQL",
            style: "shadow-white",
        },
        {
            id: 23,
            src: mysql,
            title: "MySQL",
            style: "shadow-white",
        },
        {
            id: 24,
            src: mongo,
            title: "Mongo-DB",
            style: "shadow-white",
        },
        {
            id: 25,
            src: dynamo,
            title: "Dynamo-DB",
            style: "shadow-white",
        },
       
        {
            id: 26,
            src: git,
            title: "Git",
            style: "shadow-white",
        },
        {
          id: 27,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
            id: 28,
            src: docker,
            title: "Docker",
            style: "shadow-white",
        },
        {
            id: 29,
            src: aws,
            title: "AWS",
            style: "shadow-white",
        },
      ];
  return (
    <div
    name="technologies"
    className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
  >
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
      <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Tools/Technologies
        </p>
        <p className="py-6">These are the technologies I've worked with</p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Technologies
