class ApiError extends Error{
  constructor(
    statusCoad,
    message="something went worng",
   errors= [],
   statck = ""
    
  ){
    super(message)
    this.statusCoad = statusCoad
    this.data = null 
    this.message = message
    this.success = false ;
    this.errors = errors


    if(statck){
      this.stack = statck
    } else {
      Error.captureStackTrace(this, this.
        constructor)
    }
  }
}

export{ApiError}