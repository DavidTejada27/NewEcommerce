

const Button = ({children, className}) => {

  return (
    <button className={"btn " + className + " border-none"} >{children}</button>
  )
}

export default Button