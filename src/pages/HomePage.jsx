import React, { PureComponent } from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export class HomePage extends PureComponent {
  render() {
    return (
      <div className="relative min-h-screen overflow-hidden">
          <Hero />
          <Projects />
          <Skills />
      </div>
    )
  }
}

export default HomePage
