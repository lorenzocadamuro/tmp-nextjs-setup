function Page({ title }) {
  return (
    <div>This is a blog post: {title}</div>
  )
}

Page.getInitialProps = function ({ query }) {
  return query
}

export default Page

