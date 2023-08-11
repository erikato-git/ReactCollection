import { useDispatch, useSelector } from 'react-redux'
import './_cat-nav.scss'
import React, { useEffect } from 'react'
import { getCategories } from '../../Redux/Category/actions';

function CatNav() {

    // const categories = useSelector(categorySlice.getInitialState);
    const categories = useSelector(state => state.categoryReducer.categories);
    console.log(categories)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    },[])



    return(
        <>
            <div className='cat-nav-container container'>
                <ul>
                    {
                        categories.map((category)=>{
                            return(
                                // category is a pointer that point to a property 'category' in a json-object
                                <li className='list-items'> <a href='#'> {category.category} </a> </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        </>
    )
}

export default CatNav