const dir = "./public/LM"
const fs = require("fs")

let events = []
const english = {
  startTime: "08:00:00",
  endTime: "08:30:00",
  bgColor: "#DAA520",
}
const social = {
  startTime: "08:30:00",
  endTime: "09:00:00",
  backgroundColor: "#00b386",
}
const math = {
  startTime: "09:00:00",
  endTime: "09:30:00",
  backgroundColor: "#b3b300",
}
const science = {
  startTime: "09:30:00",
  endTime: "10:00:00",
  backgroundColor: "#996633",
}
const cs = {
  startTime: "10:00:00",
  endTime: "10:30:00",
  backgroundColor: "#ff9900",
}
const II = {
  startTime: "10:30:00",
  endTime: "11:00:00",
  backgroundColor: "#009900",
}
const III = {
  startTime: "11:00:00",
  endTime: "11:30:00",
  backgroundColor: "#9966ff",
}
const getTime = (subject) => {
  switch (subject) {
    case "english":
      return english
    case "math":
      return math
    case "science":
      return science
    case "social":
      return social
    case "cs":
      return cs
    case "ii-telugu":
      return II
    case "iii-hindi":
      return III
  }
}
fs.readdir(dir, (err, files) => {
  files.forEach((file) => {
    const fields = file.split(".")[0].split("_")
    events.push({
      id: file,
      title: fields[4],
      month: fields[0],
      week: fields[1],
      startRecur: fields[2],
      endRecur: fields[3],
      ...getTime(fields[4].toLocaleLowerCase()),
      file: file,
    })
  })
  fs.writeFileSync(
    "./src/events.js",
    "export default " + JSON.stringify(events, null, 2)
  )

  console.log(events)
})
