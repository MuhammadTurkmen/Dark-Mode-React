import React from 'react'
import moment from 'moment'
const Article = ({title, snippet, data, length}) => {
  return <article className="post">
    <h2>{title}</h2>
    <div className="post-info">
      <span>date</span>
    </div>
  </article>
}

export default Article
