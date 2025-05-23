import React, { useState  } from "react";
// import ApolloClient from "apollo-boost";
// import { gql } from "apollo-boost";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { socialMediaLinks } from "../../portfolio";
import { Fade } from "react-reveal";
import {ProjectsPort} from './ProjectsPort'

export default function Projects() {
  const [repo] = useState([]);

  // useEffect(() => {
  //   getRepoData();
  // });

  // function getRepoData() {
  //   const client = new ApolloClient({
  //     uri: "https://api.github.com/graphql",
  //     request: operation => {
  //       operation.setContext({
  //         headers: {
  //           authorization: `Bearer ${atob(openSource.githubConvertedToken)}`
  //         }
  //       });
  //     }
  //   });

  //   client
  //     .query({
  //       query: gql`
  //       {
  //       user(login: "${openSource.githubUserName}") {
  //         pinnedItems(first: 6, types: [REPOSITORY]) {
  //           totalCount
  //           edges {
  //             node {
  //               ... on Repository {
  //                 name
  //                 description
  //                 forkCount
  //                 stargazers {
  //                   totalCount
  //                 }
  //                 url
  //                 id
  //                 diskUsage
  //                 primaryLanguage {
  //                   name
  //                   color
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //       `
  //     })
  //     .then(result => {
  //       setrepoFunction(result.data.user.pinnedItems.edges);
  //       // console.log(result);
  //     });
  // }

  // function setrepoFunction(array) {
  //   setrepo(array);
  // }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="myprojects">
      <h1 className="project-title">Projects</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <GithubRepoCard repo={v} key={v.node.id} />;
        })}
      </div>
      <div>
        <ProjectsPort/>
      </div>
      <Button text={"More Projects"} className="project-button" href={socialMediaLinks.github} newTab={true} />
    </div>
    </Fade>
  );
}
