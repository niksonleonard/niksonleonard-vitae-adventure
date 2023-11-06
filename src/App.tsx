import meLogo from '/me-500-500.png'
import githubLogo from '/github-mark/github-mark-white.svg'
import './App.css'
import { JobExperienceSection } from './sections/JobExperieceSection'
import { SummaryPageSection } from './sections/SummaryPageSection'
import { ForFunSection } from './sections/ForFunSession'

function App() {
  return (
    <>
      <div className='me-logo'>
          <img src={meLogo} className="logo react" alt="Nikson explosion" />
      </div>

      <div className="external-links">
        <a href="https://github.com/niksonleonard/niksonleonard-vitae-adventure" target="_blank">
          <img src={githubLogo} alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/niksonleonard" target="_blank">
          <img src="/LinkedIn_icon_circle.svg" alt="Linkedin logo" />
        </a>
      </div>

      <SummaryPageSection />
      <JobExperienceSection />
      <ForFunSection />
    </>
  )
}

export default App
