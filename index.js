function takeANumber(line , name){
  line.push(name)
  var placeInLine = line.length
  return `Welcome, ${name}. You are number ${placeInLine} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    var nextInLine = line.shift()
    return `Currently serving ${nextInLine}`
  }
}