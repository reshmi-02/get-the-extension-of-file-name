var filename=prompt("Enter the file name with extension")
document.write(`File name = ${filename}<br><br>`)
document.write("File name extension = "+filename.split('.').pop())