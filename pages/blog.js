function Page({ title }) {
  return (
    <div>This is the blog homepage: {title}</div>
  )
}

Page.getInitialProps = function ({ query }) {
  return query
}

export default Page
