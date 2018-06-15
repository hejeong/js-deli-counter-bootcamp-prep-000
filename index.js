function takeANumber(line , name){
  line.push(name)
  var placeInLine = line.length
  return "Welcome, ${name}. You are number ${placeInLine} in line."
}
