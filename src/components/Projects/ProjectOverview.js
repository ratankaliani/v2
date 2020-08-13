import React from 'react'
import styled from 'styled-components'
import ProjectTeaser from './ProjectTeaser'

const ProjectOverviewWrapper = styled.section`
  margin: 40px 0;
  z-index: -1;
`

const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
  max-width: 62em;
  margin: 0 auto;
`

const ProjectOverview = ({ projects, headline = 'Work' }) => {
  return (
    <ProjectOverviewWrapper>
      <ProjectList>
        {projects.map(p => (
          <ProjectTeaser project={p} key={p.id} />
        ))}
      </ProjectList>
    </ProjectOverviewWrapper>
  )
}

export default ProjectOverview
