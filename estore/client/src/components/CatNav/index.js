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
                            // parent_category_id === null, means it's a head category "Men", "Women" etc. which means it isn't attach to a head-category
                            if(category.parent_category_id === null){
                                return(
                                    // category is a pointer that point to a property 'category' in a json-object
                                    <li className='list-items'> <a href='#'> {category.category} </a> </li>
                                )
                            }

                        })
                    }
                    
                </ul>
            </div>
        </>
    )
}

export default CatNav