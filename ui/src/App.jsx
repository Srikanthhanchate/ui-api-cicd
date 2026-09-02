import { useEffect, useState } from 'react'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

function App() {
  const [activePage, setActivePage] = useState('Overview')

  const pages = {
    Overview: <Overview />,
    Pipelines: <Pipelines />,
    Infrastructure: <Infrastructure />,
    Applications: <Applications />,
    Deployments: <Deployments />,
  }

  return (
    <div className="app">

      <aside className="sidebar">

        <div className="brand">
          <div className="brand-mark">
            <span>CF</span>
          </div>

          <div>
            <h2>CloudFlow</h2>
            <p>Engineering Platform</p>
          </div>
        </div>

        <div className="workspace">
          <span>WORKSPACE</span>
          <strong>UI-API-CICD</strong>
        </div>

        <nav>
          <NavItem
            icon="⌂"
            label="Overview"
            active={activePage === 'Overview'}
            onClick={() => setActivePage('Overview')}
          />

          <NavItem
            icon="↯"
            label="Pipelines"
            active={activePage === 'Pipelines'}
            onClick={() => setActivePage('Pipelines')}
          />

          <NavItem
            icon="◇"
            label="Infrastructure"
            active={activePage === 'Infrastructure'}
            onClick={() => setActivePage('Infrastructure')}
          />

          <NavItem
            icon="▣"
            label="Applications"
            active={activePage === 'Applications'}
            onClick={() => setActivePage('Applications')}
          />

          <NavItem
            icon="⇧"
            label="Deployments"
            active={activePage === 'Deployments'}
            onClick={() => setActivePage('Deployments')}
          />
        </nav>

        <div className="sidebar-bottom">

          <div className="environment">
            <span className="online-dot"></span>
            <div>
              <strong>Development</strong>
              <small>Azure Environment</small>
            </div>
          </div>

          <div className="profile">
            <div className="profile-avatar">SK</div>

            <div>
              <strong>Developer</strong>
              <small>GitHub Actions</small>
            </div>

            <span className="profile-more">•••</span>
          </div>

        </div>

      </aside>

      <main className="main">

        <header className="header">

          <div>
            <div className="breadcrumb">
              CloudFlow <span>/</span> {activePage}
            </div>

            <h1>
              {activePage === 'Overview'
                ? 'Engineering Overview'
                : activePage}
            </h1>
          </div>

          <div className="header-actions">

            <div className="system-status">
              <span className="online-dot"></span>
              All systems operational
            </div>

            <button className="icon-button">⌕</button>
            <button className="icon-button">♢</button>

          </div>

        </header>

        {pages[activePage]}

      </main>

    </div>
  )
}


/* NAVIGATION */

function NavItem({ icon, label, active, onClick }) {
  return (
    <button
      className={`nav-item ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <span className="nav-icon">{icon}</span>
      <span>{label}</span>

      {active && <span className="nav-active"></span>}
    </button>
  )
}


/* OVERVIEW */

function Overview() {
  return (
    <>
      <section className="welcome">

        <div className="welcome-content">

          <div className="eyebrow">
            <span></span>
            CLOUD ENGINEERING
          </div>

          <h2>
            Build, deploy and
            <br />
            <strong>operate with confidence.</strong>
          </h2>

          <p>
            A unified delivery platform for your React frontend,
            Spring Boot API and Azure infrastructure.
          </p>

          <div className="welcome-actions">
            <button className="primary-button">
              View Pipeline →
            </button>

            <button className="secondary-button">
              Explore Infrastructure
            </button>
          </div>

        </div>

        <div className="architecture">

          <div className="architecture-ring ring-one"></div>
          <div className="architecture-ring ring-two"></div>

          <div className="architecture-center">
            <div>AZ</div>
            <span>AZURE</span>
          </div>

          <div className="architecture-node node-top">
            <span>✓</span>
            <div>
              <strong>Terraform</strong>
              <small>Applied</small>
            </div>
          </div>

          <div className="architecture-node node-bottom">
            <span>✓</span>
            <div>
              <strong>GitHub Actions</strong>
              <small>Successful</small>
            </div>
          </div>

        </div>

      </section>

      <section className="metrics">

        <Metric
          label="APPLICATIONS"
          value="02"
          description="UI + API services"
          icon="▣"
        />

        <Metric
          label="DEPLOYMENTS"
          value="24"
          description="Successful releases"
          icon="↗"
        />

        <Metric
          label="UPTIME"
          value="99.9%"
          description="Last 30 days"
          icon="✓"
        />

        <Metric
          label="AVG BUILD"
          value="01:49"
          description="Pipeline duration"
          icon="↯"
        />

      </section>

      <section className="content-section">

        <SectionTitle
          eyebrow="APPLICATIONS"
          title="Service Health"
          action="View all"
        />

        <div className="services-grid">

          <ServiceCard
            type="frontend"
            title="Frontend"
            technology="React + Vite"
            app="app-ui-api-cicd-ui-dev-2026"
          />

          <ServiceCard
            type="backend"
            title="Backend API"
            technology="Spring Boot + Java 21"
            app="app-ui-api-cicd-api-dev-2026"
          />

        </div>

      </section>

      <BackendStatus />

      <section className="pipeline-card">

        <SectionTitle
          eyebrow="DELIVERY"
          title="CI/CD Pipeline"
          action="GitHub Actions"
        />

        <div className="pipeline-flow">

          <PipelineItem
            number="01"
            title="Detect Changes"
            description="Source analysis"
          />

          <PipelineLine />

          <PipelineItem
            number="02"
            title="Terraform"
            description="Infrastructure"
          />

          <PipelineLine />

          <PipelineItem
            number="03"
            title="Build"
            description="UI / API"
          />

          <PipelineLine />

          <PipelineItem
            number="04"
            title="Deploy"
            description="Azure"
          />

        </div>

      </section>
    </>
  )
}


/* BACKEND */

function BackendStatus() {

  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {

    fetch(`${API_URL}/api/hello`)
      .then((response) => {

        if (!response.ok) {
          throw new Error('API unavailable')
        }

        return response.json()

      })
      .then((result) => {

        setData(result)
        setError(false)

      })
      .catch(() => {

        setError(true)

      })

  }, [])

  return (
    <section className="backend-panel">

      <div className="backend-heading">

        <div>
          <span className="eyebrow">LIVE SERVICE</span>
          <h3>Backend Connectivity</h3>
        </div>

        <div className={error ? 'status-error' : 'status-success'}>
          <span></span>
          {error ? 'Disconnected' : 'Connected'}
        </div>

      </div>

      {data ? (

        <div className="backend-data">

          <div>
            <small>MESSAGE</small>
            <strong>{data.message}</strong>
          </div>

          <div>
            <small>STATUS</small>
            <strong>{data.status}</strong>
          </div>

          <div>
            <small>VERSION</small>
            <strong>{data.version}</strong>
          </div>

          <div>
            <small>RUNTIME</small>
            <strong>Java 21</strong>
          </div>

        </div>

      ) : error ? (

        <div className="backend-message">
          Unable to connect to the Spring Boot API.
        </div>

      ) : (

        <div className="backend-message">
          Connecting to backend...
        </div>

      )}

    </section>
  )
}


/* PIPELINES */

function Pipelines() {

  return (
    <ModulePage
      eyebrow="CONTINUOUS DELIVERY"
      title="Pipeline Control"
      description="Automated GitHub Actions workflow"
    >

      <div className="pipeline-large">

        <PipelineItem number="01" title="Detect Changes" description="UI / API / Infra" />
        <PipelineLine />
        <PipelineItem number="02" title="Terraform" description="Azure resources" />
        <PipelineLine />
        <PipelineItem number="03" title="Build UI" description="npm build" />
        <PipelineLine />
        <PipelineItem number="04" title="Build API" description="Maven package" />
        <PipelineLine />
        <PipelineItem number="05" title="Deploy" description="Azure App Services" />

      </div>

      <div className="three-columns">

        <InfoBox title="LAST RUN" value="Successful" description="Today, 12:20 PM" />
        <InfoBox title="BRANCH" value="main" description="GitHub repository" />
        <InfoBox title="RUNNER" value="Ubuntu" description="GitHub hosted" />

      </div>

    </ModulePage>
  )
}


/* INFRASTRUCTURE */

function Infrastructure() {

  return (
    <ModulePage
      eyebrow="AZURE PLATFORM"
      title="Infrastructure"
      description="Resources provisioned and managed by Terraform"
    >

      <div className="resource-list">

        <Resource name="rg-ui-api-cicd" type="Resource Group" />
        <Resource name="asp-ui-api-cicd" type="Linux App Service Plan" />
        <Resource name="app-ui-api-cicd-ui-dev-2026" type="Frontend App Service" />
        <Resource name="app-ui-api-cicd-api-dev-2026" type="Backend App Service" />
        <Resource name="stuapicicdtfstate2026" type="Terraform Remote State Storage" />

      </div>

    </ModulePage>
  )
}


/* APPLICATIONS */

function Applications() {

  return (
    <ModulePage
      eyebrow="APPLICATION SERVICES"
      title="Applications"
      description="Frontend and backend services"
    >

      <div className="services-grid">

        <ServiceCard
          type="frontend"
          title="Frontend"
          technology="React + Vite"
          app="app-ui-api-cicd-ui-dev-2026"
        />

        <ServiceCard
          type="backend"
          title="Backend API"
          technology="Spring Boot + Java 21"
          app="app-ui-api-cicd-api-dev-2026"
        />

      </div>

      <div className="endpoint-panel">

        <span className="eyebrow">REST ENDPOINT</span>

        <h3>/api/hello</h3>

        <p>
          Spring Boot backend health endpoint
        </p>

        <div className="endpoint-row">
          <span>GET</span>
          <code>/api/hello</code>
          <strong>200 OK</strong>
        </div>

      </div>

    </ModulePage>
  )
}


/* DEPLOYMENTS */

function Deployments() {

  return (
    <ModulePage
      eyebrow="RELEASE MANAGEMENT"
      title="Deployment History"
      description="Recent application and infrastructure deployments"
    >

      <div className="deployment-list">

        <Deployment
          service="Frontend"
          version="v2"
          time="Today • 12:20 PM"
        />

        <Deployment
          service="Backend API"
          version="v2"
          time="Today • 12:10 PM"
        />

        <Deployment
          service="Infrastructure"
          version="Terraform"
          time="Today • 11:58 AM"
        />

      </div>

    </ModulePage>
  )
}


/* REUSABLE COMPONENTS */

function ModulePage({ eyebrow, title, description, children }) {

  return (
    <div className="module-page">

      <div className="module-heading">

        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="status-success">
          <span></span>
          Operational
        </div>

      </div>

      {children}

    </div>
  )
}


function SectionTitle({ eyebrow, title, action }) {

  return (
    <div className="section-title">

      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h3>{title}</h3>
      </div>

      <span className="section-action">{action} →</span>

    </div>
  )
}


function Metric({ label, value, description, icon }) {

  return (
    <div className="metric">

      <div className="metric-top">
        <span>{label}</span>
        <div>{icon}</div>
      </div>

      <strong>{value}</strong>

      <small>{description}</small>

    </div>
  )
}


function ServiceCard({ type, title, technology, app }) {

  return (
    <div className="service-card">

      <div className="service-top">

        <div className={`service-icon ${type}`}>
          {type === 'frontend' ? 'R' : 'J'}
        </div>

        <div className="service-name">
          <h4>{title}</h4>
          <span>{technology}</span>
        </div>

        <div className="health">
          <span></span>
          Healthy
        </div>

      </div>

      <div className="service-url">
        <code>{app}</code>
        <span>↗</span>
      </div>

      <div className="service-footer">
        <span>Azure App Service</span>
        <strong>Development</strong>
      </div>

    </div>
  )
}


function PipelineItem({ number, title, description }) {

  return (
    <div className="pipeline-item">

      <div className="pipeline-number">
        {number}
      </div>

      <strong>{title}</strong>
      <span>{description}</span>

    </div>
  )
}


function PipelineLine() {
  return <div className="pipeline-line"></div>
}


function InfoBox({ title, value, description }) {

  return (
    <div className="info-box">
      <span>{title}</span>
      <strong>{value}</strong>
      <small>{description}</small>
    </div>
  )
}


function Resource({ name, type }) {

  return (
    <div className="resource">

      <div className="resource-icon">◆</div>

      <div className="resource-details">
        <strong>{name}</strong>
        <span>{type}</span>
      </div>

      <div className="resource-status">
        <span></span>
        Active
      </div>

    </div>
  )
}


function Deployment({ service, version, time }) {

  return (
    <div className="deployment">

      <div className="deployment-check">
        ✓
      </div>

      <div className="deployment-service">
        <strong>{service}</strong>
        <span>{version}</span>
      </div>

      <div className="deployment-result">
        <strong>Successful</strong>
        <span>{time}</span>
      </div>

    </div>
  )
}

export default App