/**
 * Utility function to fetch in form options
 * @returns Form Options data
 */
export const getFormOptions = () => {
  return fetch("https://frontend-take-home.fetchrewards.com/form").then(res => res.json())
}




type state = {
  name: string
  abbreviation: string
}

/**
 * Object structure of data returned from getFormOptions
 */
export interface IOptions {
  occupations: string[]
  states: state[]
}

interface IUser {
  name: string
  email: string 
  password: string
  passwordConfirm?: string 
  state: string 
  occupation: string
}

/**
 * Utility function to confirm all inputs are filled in, and passwords match
 */
export const checkUser = (user: IUser) => {
  if (user.name !== '' && user.email !== '' 
  && user.password === user.passwordConfirm && user.password !== '' 
  && user.occupation !== '' && user.state !== '') {
    console.log("hello")
    postFormSubmission({name: user.name, email: user.email, password: user.password, occupation: user.occupation,state: user.state})
    return true
  } else return false
}
export const postFormSubmission = (user:IUser) => {
  return fetch("https://frontend-take-home.fetchrewards.com/form", {
    method: "POST",
    body: JSON.stringify(user)
  }).then(res => console.log(res))

}