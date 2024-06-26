import React, { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../UserContext"
import PhotoCommentsForm from "./PhotoCommentsForm"
import styles from "./PhotoComments.module.css"

const PhotoComments = (props) => {
  const { login } = useContext(UserContext)
  const commentSection = useRef(null)
  const [comments, setComments] = useState(() => props.comments)

  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul
        ref={commentSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} single={props.single}/>}
    </>
  )
}

export default PhotoComments
