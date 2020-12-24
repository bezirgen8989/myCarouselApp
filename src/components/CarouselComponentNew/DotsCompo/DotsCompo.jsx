import React from 'react';
import './dotsCopmoStyle.css'

const DotsCompo = (props) => {
    return (
        <div className='dotsMainBox'>
            <div className='dotsBox'>
                {props.imageArr.map((items, id) => {
                        return (
                            <span
                                onClick={() => { props.dotsFoo(id) }}
                                key={items.id}
                                className={id === props.activeImage ? 'dots_active' : 'dots'}
                            ></span>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default DotsCompo;