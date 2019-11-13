import React from 'react'
export default function CmtItem(props) {
    return <div>
    <h1>{props.user}</h1>
    <p>{props.content}</p>
    </div>
}