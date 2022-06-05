type ContainerLayoutProps = {
  children?: React.ReactNode
}

const Container = ({ children }: ContainerLayoutProps) => {
  return <div className="container mx-auto">{children}</div>
}

export default Container
