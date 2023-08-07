// Storing results of expensive functions and returning the cached results when the same occur happen again

import React, { memo, useCallback, useMemo, useState } from 'react'


function Swatch({ params, clickFunction }){
    console.log(`Swatch rendered ${params.color}`)     // will render each time because its not memo
    console.log(`ClickFunction ${clickFunction}`)
    return (
        <div style={{margin: 2, height: 75, width: 75, backgroundColor: params.color}}></div>
    )
}

const MemoedSwatch = memo(Swatch);  // works fine if Swatch takes in primitive datatypes as arguments not objects or arrays because they will compare by references
                                    // For complex datatypes we pass to Swatch we use useMemo instead


function Memo() {
    const [appRenderIndex, setAppRenderIndex] = useState(0);
    const [color, setColor] = useState("red")

    const params = useMemo(() => ({ color }), [color])      // passing complex datatype to a "memo"-component, it checks if [color] changes and will only re-render that component if "color" has changed
    const onClick = useCallback(() => {},[]);   // used to pass a function to a "memo"-component, otherwise it will break the memo

    console.log(`App rendered ${appRenderIndex}`);


    return (
        <>
            <div>
                <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>Re-Render app</button>
                {/* <button onClick={() => setColor(color === "red" ? "blue" : "red")}>Change color</button> */}
            </div>
            <div>
                {/* <Swatch color="red" /> */}
                <MemoedSwatch params={params} clickFunction={onClick} />
            </div>
        </>
    )
}

export default Memo








