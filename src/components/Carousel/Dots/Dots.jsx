import React, {useCallback} from 'react';
import './dots.css'

const Dots = (props) => {
    const slideToDotId = useCallback((id)=>{
        props.dotsFoo(id)
    }, [props.dotsFoo]);
    
    return (
        <div className='dotsMainBox'>
            <div className='dotsBox'>
                {props.elementsArr.map((items, id) => {
                        return (
                            <span
                                onClick={()=>slideToDotId(id)}
                                key={items.id}
                                className={id === props.activeItem ? 'dots_active' : 'dots'}
                            ></span>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Dots;