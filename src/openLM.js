import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import React, { useState } from "react"

import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import CloseIcon from "@mui/icons-material/Close"
import Dialog from "@mui/material/Dialog"
import IconButton from "@mui/material/IconButton"
import Slide from "@mui/material/Slide"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog(props) {
  const { lm } = props
  const [numPages, setNumPages] = useState(null)
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }
  console.log(props)
  const handleClose = () => {
    props.onClose(null)
  }

  return (
    <div>
      <Dialog
        fullScreen
        open={true}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {lm.title} - Learning Module
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <Document
          file={"./LM/" + lm.id}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          {Array.apply(null, Array(numPages)).map((_, page) => (
            <Page
              key={page + 1}
              pageNumber={page + 1}
              width={document.getElementById("root").clientWidth - 50}
            />
          ))}
        </Document>
      </Dialog>
    </div>
  )
}
