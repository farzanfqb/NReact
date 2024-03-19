export const Shimmer = () => {
  return (
    (Array(10).fill("").map((e,index)=> <div key={index} style={{display:"inline-flex",margin:"10px",width:"200px",height:"200px", backgroundColor:"lightgrey"}} />))
  )
}
