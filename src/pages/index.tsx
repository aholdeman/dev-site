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
  padding: 10,
  paddingTop: 0
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
  },
  {
    text: "Daily Nietzsche",
    url: "https://dailynietzschesignup.wordpress.com/",
    description:
      "You like Nietzsche??",
    color: "#BC027F",
  }
]
const bioImgStyle = {
  padding: "10px",
  height: "400px",
  width: "95%"
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "fit-content(1fr) fit-content(1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gridColumnGap: "20px",
  gridRowGap: "10px"
}
const anotherStyle = {
  backgroundColor: "#E6DEF1",
  borderColor: "#201E1E",
  borderStyle: "solid",

}
const aboutMeGrid = {
  gridArea: "1 / 1 / 3 / 2",
}
const gridItem1 = { gridArea: "auto / auto / auto / auto",   display: "flex",
alignItems: "center"}
const gridItem2 = { gridArea: "2 / 2 / 3 / 3",   display: "flex",
alignItems: "center",
justifyContent: "center"}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <> <NavHeader />
      <main style={pageStyles}>
        <div style={gridStyle}>
          <div style={{ ...aboutMeGrid, ...anotherStyle }}>
            <img style={bioImgStyle} alt="Finn, a brown chihuahua pitbull, looking stoically at the camera" src="https://abby-dev-site-images.s3.amazonaws.com/finnpic.jpg" />
            <h1 style = {headingAccentStyles}> Hi there!</h1>
            <p style={aboutMeText}>My name is Abby and I am a software developer living in Charlotte, NC. I graduated from the University of South Carolina in 2019 with a degree in Computer Science. In my spare time, you can find me building a new project or playing Pokemon Go out in the wild.</p>
          </div>
          <div style={{ ...gridItem1, ...anotherStyle }}> <ul>
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
          <div style={{...gridItem2, ...anotherStyle}}>
            <p style={aboutMeText}>Blog coming soon!</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Abby's Place!</title>
