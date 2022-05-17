const dir = "./public/LM"
const fs = require("fs")

let events = []
const english = {
  startTime: "08:00:00",
  endTime: "08:30:00",
  // bgColor: "#DAA520",
  // borderColor: "#DAA520",
}
const social = {
  startTime: "08:30:00",
  endTime: "09:00:00",
  backgroundColor: "#00b386",
  borderColor: "#00b386",
}
const math = {
  startTime: "09:00:00",
  endTime: "09:30:00",
  backgroundColor: "#b3b300",
  borderColor: "#b3b300",
}
const physics = {
  startTime: "09:30:00",
  endTime: "10:00:00",
  backgroundColor: "#996633",
  borderColor: "#996633",
}
const chemistry = {
  startTime: "10:00:00",
  endTime: "10:30:00",
  backgroundColor: "#ff9900",
  borderColor: "#ff9900",
}

const biology = {
  startTime: "10:30:00",
  endTime: "11:00:00",
  backgroundColor: "#009900",
  borderColor: "#009900",
}
const cs = {
  startTime: "11:00:00",
  endTime: "11:30:00",
  backgroundColor: "#9966ff",
  borderColor: "#9966ff",
}

const II = {
  startTime: "11:30:00",
  endTime: "12:00:00",
  backgroundColor: "#2d2d86",
  borderColor: "#2d2d86",
}
const III = {
  startTime: "12:00:00",
  endTime: "12:30:00",
  backgroundColor: "#55552b",
  borderColor: "#55552b",
}

const art_craft = {
  startTime: "12:30:00",
  endTime: "01:0:00",
  backgroundColor: "#004d4d",
  borderColor: "#004d4d",
}

const getTime = (subject) => {
  switch (subject) {
    case "english":
      return english
    case "math":
      return math
    case "physics":
      return physics
    case "chemistry":
      return chemistry
    case "biology":
      return biology
    case "social":
      return social
    case "computer science":
      return cs
    case "telugu-ii-lang":
      return II
    case "hindi-iii-lang":
      return III
    case "art & craft":
      return art_craft
  }
}
fs.readdir(dir, (err, files) => {
  files.forEach((file) => {
    const fields = file.split(".")[0].split("_")
    let date = fields[2].split("-")
    let startDate = `20${date[2]}-${date[1]}-${date[0]}`
    date = fields[3].split("-")
    let endDate = `20${date[2]}-${date[1]}-${date[0]}` //${parseInt(date[0]) + 1}
    events.push({
      id: file,
      title: fields[4].toLocaleUpperCase(),
      month: fields[0],
      week: fields[1],
      startRecur: startDate,
      endRecur: endDate,
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
