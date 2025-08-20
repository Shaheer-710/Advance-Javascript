let urdu = 44
let pst = 45
let islamiat = 40
let maxmarks = 150

const totalmarks = ()=>{
      let total = (urdu+pst+islamiat) 
      console.log(total);
      return total
}

totalmarks()

const calculatepercentage = ()=>{
let total = totalmarks()
  let percentage =  (total / maxmarks )*100
  console.log(percentage);
  return percentage
}

calculatepercentage()

const marksheet = ()=>{
    let total = totalmarks()
    let percentage = calculatepercentage()
    let marksheet1 =( `<h3>Marksheet</h3>
        <p><strong>Subject</strong> | <strong>Marks Obtained</strong></p>
        <hr>
        <p>Urdu: ${urdu}</p>
        <p>PST: ${pst}</p>
        <p>Islamiat: ${islamiat}</p>
        <hr>
        <p><strong>Total Marks:</strong> ${total} / ${maxmarks}</p>
        <p><strong>Percentage:</strong> ${percentage}</p>
    ` )
                      document.write(marksheet1)
}

marksheet()