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
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <> <NavHeader />
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Welcome to my ~ twisted mind
        <br />
        <span style={headingAccentStyles}>— it's going to be a great time! 🎉🎉🎉</span>
      </h1>
      <img
        alt="Finn, a brown chihuahua pitbull, looking stoically at the camera"
        src="https://abby-dev-site-images.s3.amazonaws.com/finnpic.jpg"
      />
      <p style={paragraphStyles}>
        We're having fun, aren't we folks?
      </p>
      <ul style={listStyles}>
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
      </ul>
    </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Abby's Place!</title>
