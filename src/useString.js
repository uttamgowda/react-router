import React, { useState } from "react"


const useString = (userName = "guest")=>{
    const [user,setUser] = useState(userName)

    return [user,setUser]
}
export default useString