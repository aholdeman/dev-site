import React from "react"
import "@fontsource/space-grotesk";

const navHeader = {
  backgroundColor: "#E6DEF1",
  top: 0,
  width: "100%",
  position: "fixed"
}
const nameCard = {
  color: "#201E1E",
  fontFamily: "Space Grotesk,sans-serif",
  fontSize: 24,
  marginLeft: 10,

}

export default function NavHeader() {
  return (
    <div style={navHeader}>
      <h1 style={nameCard}>abby holdeman</h1>
    </div>
  )
}