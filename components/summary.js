import React from 'react'
import Link from 'next/link'

export default function Summary (props) {
    return (
        <div class='summary-wrapper'>
            <div class='summary-title'>
                <p class='title-content'>{props.title}</p>
                <p class='title-more'><Link href={props.link}><a>더보기</a></Link></p>
            </div>
            <div class='summary-contents'>
                <ul>
                    {props.contents.map(content => (
                        <li>{content}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}