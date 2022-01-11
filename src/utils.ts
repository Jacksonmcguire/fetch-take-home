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

export interface IUser {
  name: string
  email: string 
  password: string
  passwordConfirm?: string 
  state: string 
  occupation: string
}

/**
 * Utility function to confirm all inputs are filled in, and passwords match
 * If everything looks right, it calls the postFormSubmission function
 */
export const checkUser = (user: IUser) => {
  if (user.name !== '' && user.email !== '' 
  && user.password === user.passwordConfirm && user.password !== '' 
  && user.occupation !== '' && user.state !== '') {
    return postFormSubmission({name: user.name, email: user.email, password: user.password, occupation: user.occupation,state: user.state})
  }
}
export const postFormSubmission = (user:IUser) => {
  return fetch("https://frontend-take-home.fetchrewards.com/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(res => res.status)

}