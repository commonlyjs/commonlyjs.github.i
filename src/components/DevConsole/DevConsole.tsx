import React from "react"
import PropTypes from "prop-types"



export interface Props {

}

DevConsole.propTypes = {

}


function DevConsole({}: Props) {
  return (
    <div
      id="devconsole"
      className="devconsole"
      style={{ display: "none" }}
    >
      Not initialized
    </div>
  )
}



export default DevConsole
