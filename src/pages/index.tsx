import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavHeader from "../components/nav-header"

const pageStyles = {
  backgroundColor: "#F3EAFE",
  color: "#232129",
  padding: 96,
  width: "100%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingAccentStyles = {
  padding: 10,
  color: "#663399",
}
const aboutMeText = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
  fontWeight: 300,
  maxWidth: 560,
  padding: 10
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}


const links = [
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/abbyholdeman/",
    description:
      "I can be professional. Sometimes.....",
    color: "#E95800",
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/abbyholdeman/",
    description:
      "Am I supposed to remember to post here?",
    color: "#1099A8",
  }
]
const bioImgStyle = {
  padding: "10px",
  height: "400px",
  width: "95%"
}

const gridStyle = {
  display: "grid",
  gridColumnGap: "10px",
  gridRowGap: "10px"
}
const anotherStyle = {
  backgroundColor: "#E6DEF1",
  borderColor: "#201E1E",
  borderStyle: "solid"
}
const aboutMeGrid = {
  gridArea: "1 / 1 / 3 / 2",
  width: 500
}
const gridItem1 = { gridArea: "1 / 2 / 2 / 3" }
const gridItem2 = { gridArea: "2 / 2 / 3 / 3" }

const IndexPage: React.FC<PageProps> = () => {
  return (
    <> <NavHeader />
      <main style={pageStyles}>
        <div style={gridStyle}>
          <div style={{ ...aboutMeGrid, ...anotherStyle }}>
            <img style={bioImgStyle} alt="Finn, a brown chihuahua pitbull, looking stoically at the camera" src="https://abby-dev-site-images.s3.amazonaws.com/finnpic.jpg" />
            <h1 style = {headingAccentStyles}> Hi there!</h1>
            <p style={aboutMeText}>My name is Abby and I am a software developer living in Charlotte, NC. I graduated from the University of South Carolina in 2019 with a degree in Computer Science.</p>
          </div>
          <div style={{ ...gridItem1, ...anotherStyle }}> <ul style={listStyles}>
            {links.map(link => (
              <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
                <span>
                  <a
                    style={linkStyle}
                    href={link.url}
                  >
                    {link.text}
                  </a>
                  <p style={descriptionStyle}>{link.description}</p>
                </span>
              </li>
            ))}
          </ul> </div>
        </div>
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Abby's Place!</title>
